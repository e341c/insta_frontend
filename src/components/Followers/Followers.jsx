"use client";
import Account from "./Account";

export default function Folowers({ getFollowersModal }) {
    return (
        <div className="modal-background" onClick={() => getFollowersModal(false)}>
            <div className="modal">
                <div className="modal-top" onClick={(e) => e.stopPropagation()}>
                    <p className="text-medium">Folowers</p>
                </div>
                <div className="folowers">
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                    <Account />
                </div>
            </div>
        </div>
    );
}
