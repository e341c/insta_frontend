import Post from "./Post"

export default function Posts({posts}) {

    const showPosts = posts.map(item => (<Post data={item} />))

    return (
        <div className="profile-posts">
            {showPosts}
        </div>
    )
}