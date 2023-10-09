import Image from "next/image";
import Comment from "@/components/Comment";
import activity from "@/app/images/ActivityFeed.svg";
import { useState } from "react";
import CommentInput from "../CommentInput";

export default function PostDetail({ data, getPost }) {
    const [comment, setComment] = useState("");
    const [author, setAuthor] = useState("");
    const [allComments, setAllComments] = useState([]);

    console.log(comment);

    const handleSubmit = (e) => {
        e.preventDefault();

        const comments = [];

        const body = {
            comment,
            author: "Author",
        };

        comments.push(body);

        setAllComments(comments);
        console.log(comments);
    };

    return (
        <div className="modal-background" onClick={() => getPost(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
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
                                            <strong>terrylucas</strong>
                                        </p>
                                        <p className="m-0">Original video</p>
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path
                                            d="M12 13.6549C12.8284 13.6549 13.5 12.9834 13.5 12.1549C13.5 11.3265 12.8284 10.6549 12 10.6549C11.1716 10.6549 10.5 11.3265 10.5 12.1549C10.5 12.9834 11.1716 13.6549 12 13.6549Z"
                                            fill="#262626"
                                        />
                                        <path
                                            d="M6.5 13.6549C7.32843 13.6549 8 12.9834 8 12.1549C8 11.3265 7.32843 10.6549 6.5 10.6549C5.67157 10.6549 5 11.3265 5 12.1549C5 12.9834 5.67157 13.6549 6.5 13.6549Z"
                                            fill="#262626"
                                        />
                                        <path
                                            d="M17.5 13.6549C18.3284 13.6549 19 12.9834 19 12.1549C19 11.3265 18.3284 10.6549 17.5 10.6549C16.6716 10.6549 16 11.3265 16 12.1549C16 12.9834 16.6716 13.6549 17.5 13.6549Z"
                                            fill="#262626"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="detail-comments">
                            {allComments.map((item) => (
                                <Comment data={item} />
                            ))}
                        </div>
                        <div>
                            <div className="mb-2 post-detail-activity">
                                <div className="row justify-between mb-2">
                                    <div>
                                        <Image src={activity} className="me-2" alt="img" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 24 25" fill="none">
                                            <g clip-path="url(#clip0_1701_789)">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M23.75 23.2049L22.35 17.7049C23.25 16.0549 23.75 14.1549 23.75 12.1549C23.75 5.65491 18.5 0.404907 12 0.404907C5.5 0.404907 0.25 5.65491 0.25 12.1549C0.25 18.6549 5.5 23.9049 12 23.9049C14 23.9049 15.9 23.4049 17.55 22.5049L23.05 23.9049C23.45 24.0049 23.85 23.6049 23.75 23.2049ZM22.25 12.1549C22.25 14.1549 21.75 15.6549 20.95 17.1549C20.85 17.3549 20.8 17.6049 20.85 17.8549L21.9 22.0549L17.75 21.0049C17.5 20.9549 17.25 20.9549 17.05 21.1049C16.15 21.6049 14.45 22.4049 12.05 22.4049C6.35 22.4049 1.75 17.8049 1.75 12.1549C1.75 6.50491 6.35 1.90491 12 1.90491C17.65 1.90491 22.25 6.50491 22.25 12.1549Z"
                                                    fill="#262626"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1701_789">
                                                    <rect width="24" height="24" fill="white" transform="translate(0 0.154907)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 24 25" fill="none">
                                            <g clip-path="url(#clip0_1702_794)">
                                                <path
                                                    d="M21.75 24.1549C21.55 24.1549 21.35 24.0549 21.2 23.9549L12 14.6549L2.8 23.9549C2.6 24.1549 2.25 24.2549 2 24.1049C1.7 24.0049 1.5 23.7049 1.5 23.4049V0.904907C1.5 0.504907 1.85 0.154907 2.25 0.154907H21.75C22.15 0.154907 22.5 0.504907 22.5 0.904907V23.4049C22.5 23.7049 22.3 24.0049 22.05 24.1049C21.95 24.1549 21.85 24.1549 21.75 24.1549ZM12 13.1549C12.4 13.1549 12.8 13.3049 13.1 13.6049L21 21.6049V1.65491H3V21.6049L10.9 13.6049C11.2 13.3049 11.6 13.1549 12 13.1549Z"
                                                    fill="#262626"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1702_794">
                                                    <rect width="24" height="24" fill="white" transform="translate(0 0.154907)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <p>
                                    Liked by <strong>nickname</strong> and <strong>{data.likes} others</strong>{" "}
                                </p>
                            </div>
                            <CommentInput />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
