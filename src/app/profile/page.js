import Image from "next/image";
import ava from "@/app/images/ava.png";
import Posts from "@/components/posts/posts";
import Post from "@/components/posts/post";
import Header from "@/components/header";

export default function Profile() {
    const arrPosts = [1, 2, 3, 4, 5, 6];

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
