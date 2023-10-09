'use client'
import Image from "next/image";
import ava from "@/app/images/ava.png";
import Posts from "@/components/Posts/Posts";
import Header from "@/components/Header";
import Folowers from "@/components/Followers/Followers";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    const [followersModal, setFollowersModal] = useState(false)
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

    const currentUser = useSelector((state) => state.auth.currentUser)
    console.log(currentUser);

    return (
        <main>
            {followersModal && <Folowers getFollowersModal={(result) => setFollowersModal(result)} />}
            <div className="container">
                <div className="profile-info mt-5 mb-4">
                    <Image src={ava} alt="avatar" />
                    <div className="profile-text">
                        <div className="row align-center mb-3">
                            <h2 className="mx-3">{currentUser?.username}</h2>
                            <button className="btn">Follow</button>
                        </div>
                        <div className="row mb-3">
                            <p className="mx-3">
                                <strong>1,258</strong>&nbsp;posts
                            </p>
                            <button className="mx-3 btn-none" onClick={() => setFollowersModal(true)}>
                                <p className="text-medium">
                                    <strong>4M</strong>&nbsp;followers
                                </p>
                            </button>
                            <p className="mx-3">
                                <strong>1,250</strong>&nbsp;following
                            </p>
                        </div>
                        <div>
                            <p className="mx-3">{currentUser?.full_name}</p>
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
