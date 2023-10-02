import { useState } from "react";
import Story from "./Story";

export default function StoryIcon({ data }) {
    const [storyOpen, setStoryOpen] = useState(false)


    return (
        <div>
            {storyOpen && <Story getStoryOpen={(result) => setStoryOpen(result)} />}
            <div className="story-item">
                <div className="story-outline">        
                    <div className="story-img" onClick={() => setStoryOpen(true)}>
                        <img src="" alt="" />
                    </div>
                </div>
                <p>Account</p>
            </div>
        </div>
    );
}
