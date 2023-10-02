"use client"
import { useState } from "react"
import PostDetail from "../PostDetail/PostDetail"

export default function Post({data}) {
    const [post, setPost] = useState(false)

    return (
        <div >
            {post && <PostDetail data={data} getPost={result => setPost(result)} />}
            <img className="post-image" src={"/posts/" + data.url} alt="img" onClick={() => setPost(true)} />
        </div>
    )
}