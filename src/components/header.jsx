"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.png";
import home from "@/app/images/home.svg"
import findPeople from  "@/app/images/FindPeople.svg"
import messenger from "@/app/images/Messenger.svg"
import newPosts from "@/app/images/NewPosts.svg"
import activity from "@/app/images/ActivityFeed.svg"
import profilePic from "@/app/images/profile-pic.png"
import search from "@/app/images/search.svg"
import { useState } from "react";
import AddPost from "./AddPost/AddPost";

export default function Header() {
    const [modal, setModal] = useState(false)

    return (
        <header>
            {modal && <AddPost onClose={() => setModal(false)}/>}
            <div className="container row header">
                <div>
                    <Image src={logo} />
                </div>
                <div className="header-search">
                    <Image className="search-icon" src={search} />
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="icons">
                    <Link className="mx-2" href={"#"}>
                        <Image src={home} />
                    </Link>
                    <Link className="mx-2" href={"#"}>
                        <Image src={messenger} />
                    </Link>
                    <button className="mx-2 btn-none" onClick={() => setModal(true)}>
                        <Image src={newPosts} />
                    </button>
                    <Link className="mx-2" href={"#"}>
                        <Image src={findPeople} />
                    </Link>
                    <Link className="mx-2" href={"#"}>
                        <Image src={activity} />
                    </Link>
                    <Link className="mx-2" href={"/profile"}>
                        <Image src={profilePic} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
