export default function Account({ data }) {
    return (
        <div className="row align-center mb-2">
            <div className="row">
                <div className="modal-profile-img">
                    <img src="" alt="" />
                </div>
                <div>
                    <p className="m-0 row">
                        <strong>User</strong>&nbsp;&#x2022;<button className="btn-none btn-text">Follow</button>
                    </p>
                    <p className="m-0">Nickname</p>
                </div>
            </div>
            <div className="ms-auto"></div>
        </div>
    );
}
