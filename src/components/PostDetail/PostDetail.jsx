import Image from "next/image";
import Comment from "@/components/Comment";
import activity from "@/app/images/ActivityFeed.svg";
import { useState } from "react";

export default function PostDetail({ data, getPost }) {
    const [comment, setComment] = useState('')
    const [author, setAuthor] = useState('')
    const [allComments, setAllComments] = useState([])

    console.log(comment);

    const handleSubmit = (e) => {
        e.preventDefault()

        const comments = []

        const body = {
            comment,
            author: "Author"
        }

        comments.push(body)

        setAllComments(comments)
        console.log(comments);
    }


    return (
        <div className="modal-background" onClick={() => getPost(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-between">
                    <div className="modal-left">
                        <img src={"/posts/" + data.url} alt="NO" />
                    </div>
                    <div className="modal-right">
                        <div className="modal-top">
                            <div className="row align-center ">
                                <div className="row">
                                    <div className="modal-profile-img">
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <p className="m-0">
                                            <strong>Decode</strong>
                                        </p>
                                        <p className="m-0">Original video</p>
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="detail-comments">
                            {allComments.map(item => (
                                <Comment data={item} />
                            ))}
                        </div>
                        <div>
                            <div className="mb-2 post-detail-activity">
                                <div className="row justify-between mb-2">
                                    <div>
                                        <Image src={activity} className="me-2" />
                                        <svg style={{ width: "22px", height: "22px" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg style={{ width: "22px", height: "22px" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                                        </svg>
                                    </div>
                                </div>
                                <p>Liked by <strong>nickname</strong> and <strong>{data.likes} others</strong> </p>
                            </div>
                            <div className="comment-input">
                                <hr />
                                <form onSubmit={(e) => handleSubmit(e)} action="" className="row">
                                    <textarea name="comment" onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." id="comment"></textarea>
                                    <button type="submit" className="btn-none btn-text">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
