import { useState } from "react";

export default function CommentInput() {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            comment,
            author: "Author",
        };

    };

    return (
        <div className="comment-input">
            <form onSubmit={(e) => handleSubmit(e)} action="" className="row">
                <textarea name="comment" onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." id="comment"></textarea>
                <button type="submit" className="btn-none btn-text">
                    Post
                </button>
            </form>
        </div>
    )
}
