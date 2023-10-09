import Link from "next/link";
import ava from "../../app/images/ava.png"



export default function SuggestionAccount({ data }) {
    return (
        <Link href={"#"} className="text-none">
            <div className="row align-center mb-2 suggestion-account">
                <div className="row">
                    <div className="profile-picture">
                        <img src='../posts/post1.png' alt="suggestion" />
                    </div>
                    <div className="suggestion-account-text suggestion-account-text-top">
                        <div className="m-0 justify-between">
                            <strong>User</strong>
                            <p className="m-0">Followed by terrylucas + 2 more</p>
                        </div>
                        <button className="btn-none btn-text">Follow</button>
                    </div>
                </div>
                <div className="ms-auto"></div>
            </div>
        </Link>
    );
}
