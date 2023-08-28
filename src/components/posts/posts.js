import Post from "./post"

export default function Posts({posts}) {

    const showPosts = posts.map(item => (<Post item={item} />))

    return (
        <div className="profile-posts">
            {showPosts}
        </div>
    )
}