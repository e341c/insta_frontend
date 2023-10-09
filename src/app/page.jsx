"use client";
import HomePost from "@/components/Home/HomePost";
import Suggestions from "@/components/Home/Suggestions";
import StoryIcon from "@/components/Story/StoryIcon";

export default function Home() {
    const arrPosts = [
        {
            id: 1,
            url: "post1.png",
            likes: 173,
            views: 450,
            comments: 87,
        },
        {
            id: 2,
            url: "post2.png",
            likes: 1733,
            views: 4520,
            comments: 827,
        },
        {
            id: 3,
            url: "post3.png",
            likes: 1733,
            views: 4520,
            comments: 87,
        },
        {
            id: 4,
            url: "post4.png",
            likes: 173,
            views: 450,
            comments: 87,
        },
        {
            id: 5,
            url: "post5.png",
            likes: 2173,
            views: 4250,
            comments: 837,
        },
        {
            id: 6,
            url: "post6.png",
            likes: 1744,
            views: 4540,
            comments: 847,
        },
    ];

    return (
        <main className="container">
            <div className="row">
                <div className="home">
                    <div className="story">
                        <StoryIcon />
                        <StoryIcon />
                        <StoryIcon />
                    </div>
                    <div>
                        {arrPosts.map((item) => (
                            <HomePost data={item} key={item.id} />
                        ))}
                    </div>
                </div>
                <div>
                    <Suggestions />
                </div>
            </div>
        </main>
    );
}
