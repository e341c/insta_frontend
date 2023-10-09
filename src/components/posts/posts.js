import Post from "./Post"

export default function Posts({posts}) {

    const showPosts = posts.map(item => (<Post data={item} key={item.id} />))

    return (
        <div className="profile-posts">
            {showPosts}
        </div>
    )
}