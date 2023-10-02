"use client";
import { useState } from "react";
import PostDetail from "../PostDetail/PostDetail";
import activity from "@/app/images/ActivityFeed.svg";
import Image from "next/image";

export default function HomePost({ data }) {
    const [post, setPost] = useState(false);

    return (
        <div>
            <div className="home-post-top">
                <div className="home-outline">
                    <div className="home-img">
                        <img src="" alt="" />
                    </div>
                </div>
                <p>terrylucas</p>
            </div>
            <div className="home-post-img-container">
                {post && <PostDetail data={data} getPost={(result) => setPost(result)} />}
                <img className="home-post-img" src={"/posts/" + data.url} alt="img" onClick={() => setPost(true)} />
            </div>
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
                <p className="mb-1">{data.likes} likes</p>
                <p className="home-post-desc mb-2">
                    <strong>Author</strong>&nbsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, porro.
                </p>
                <p className="text-grey">View all {data.comments} comments</p>
            </div>
            <div className="comment-input">
                <hr />
                <form onSubmit={(e) => handleSubmit(e)} action="" className="row">
                    <textarea name="comment" onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." id="comment"></textarea>
                    <button type="submit" className="btn-none btn-text">
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}
