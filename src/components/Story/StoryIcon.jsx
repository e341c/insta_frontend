import { useState } from "react";
import Story from "./Story";

export default function StoryIcon({ data }) {
    const [storyOpen, setStoryOpen] = useState(false);

    return (
        <div>
            {storyOpen && <Story getStoryOpen={(result) => setStoryOpen(result)} />}
            <div className="story-item">
                <div className="profile-picture-story" onClick={() => setStoryOpen(true)}>
                    <img src="../posts/post1.png" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 66 67" fill="none">
                        <circle cx="33" cy="33.1549" r="31.75" stroke="url(#paint0_linear_1655_649)" strokeWidth="2.4" />
                        <defs>
                            <linearGradient id="paint0_linear_1655_649" x1="33" y1="0.15493" x2="33" y2="66.1549" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#DE0046" />
                                <stop offset="1" stopColor="#F7A34B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p>Account</p>
            </div>
        </div>
    );
}
