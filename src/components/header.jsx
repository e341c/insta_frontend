"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.png";
import home from "@/app/images/home.svg";
import findPeople from "@/app/images/FindPeople.svg";
import messenger from "@/app/images/Messenger.svg";
import newPosts from "@/app/images/NewPosts.svg";
import activity from "@/app/images/ActivityFeed.svg";
import profilePic from "@/app/images/ava.png";
import search from "@/app/images/search.svg";
import { useState } from "react";
import AddPost from "./AddPost/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/store/slices/authSlice";

export default function Header() {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.currentUser);
    console.log(currentUser);

    return (
        <header>
            {modal && <AddPost onClose={() => setModal(false)} />}
            <div className="container row header">
                <Link href={"/"}>
                    <Image src={logo} alt="logo" />
                </Link>
                <div className="header-search">
                    <Image className="search-icon" src={search} alt="serch" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="icons">
                    <Link className="mx-2" href={"/"}>
                        <Image src={home} alt="home" />
                    </Link>
                    <Link className="mx-2" href={"#"}>
                        <Image src={messenger} alt="messenger" />
                    </Link>
                    <button className="mx-2 btn-none" onClick={() => setModal(true)}>
                        <Image src={newPosts} alt="new" />
                    </button>
                    <Link className="mx-2" href={"#"}>
                        <Image src={findPeople} alt="find" />
                    </Link>
                    <Link className="mx-2" href={"#"}>
                        <Image src={activity} alt="activity" />
                    </Link>
                    {!currentUser && (
                        <div>
                            <Link className="mx-2 btn-none text-none" href={"login"}>
                                <p>Sign In</p>
                            </Link>
                        </div>
                    )}
                    {currentUser && (
                        <div className="icons">
                            <Link className="mx-2 header-profile-pic" href={"/profile"}>
                                <Image src={profilePic} alt="profile" />
                            </Link>
                            <Link className="mx-2 btn-none text-none text-red" href={"#"}>
                                <p onClick={() => dispatch(logout())}>Logout</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
