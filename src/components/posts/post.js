

export default function Post({item}) {
    const imgUrl = "/posts/"

    return (
        <div >
            <img className="post-image" src={"/posts/" + item.url} alt="NO" />
        </div>
    )
}