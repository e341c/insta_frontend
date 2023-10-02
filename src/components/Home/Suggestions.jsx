"use client";
import SuggestionAccount from "@/components/Home/SuggestionAccount";

export default function Suggestions({ getFollowersModal }) {
    return (
        <div className="suggestions">
            <div className="">
                <div className="">
                    <p className="text-medium mb-3">Suggestions for you</p>
                    <SuggestionAccount />
                    <SuggestionAccount />
                    <SuggestionAccount />
                    <SuggestionAccount />
                </div>
            </div>
        </div>
    );
}
