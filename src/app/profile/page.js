import Image from "next/image";
import ava from "@/app/images/ava.png";
import Posts from "@/components/posts/posts";
import Header from "@/components/header";

export default function Profile() {
    const arrPosts = [
        {
            id: 1,
            url: "post1.png",
            likes: 173,
            views: 450,
            comments: 87
        },
        {
            id: 2,
            url: "post2.png",
            likes: 1733,
            views: 4520,
            comments: 827
        },
        {
            id: 3,
            url: "post3.png",
            likes: 1733,
            views: 4520,
            comments: 87
        },
        {
            id: 4,
            url: "post4.png",
            likes: 173,
            views: 450,
            comments: 87
        },
        {
            id: 5,
            url: "post5.png",
            likes: 2173,
            views: 4250,
            comments: 837
        },
        {
            id: 6,
            url: "post6.png",
            likes: 1744,
            views: 4540,
            comments: 847
        },
    ];

    return (
        <main>
            <Header />
            <div className="container">
                <div className="profile-info mt-5 mb-4">
                    <Image src={ava} />
                    <div className="profile-text">
                        <div className="row align-center mb-3">
                            <h2 className="mx-3">terrylucas</h2>
                            <button className="btn">Follow</button>
                        </div>
                        <div className="row mb-3">
                            <p className="mx-3">
                                <strong>1,258</strong>&nbsp;posts
                            </p>
                            <p className="mx-3">
                                <strong>4M</strong>&nbsp;followers
                            </p>
                            <p className="mx-3">
                                <strong>1,250</strong>&nbsp;following
                            </p>
                        </div>
                        <div>
                            <p className="mx-3">Terry Lucas</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Posts posts={arrPosts} />
                </div>
            </div>
        </main>
    );
}
