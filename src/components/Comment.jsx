export default function Comment({data}) {
    return (
        <div className="row align-center justify-between comment">
            <a href="/profile" className="row">
                <div className="modal-profile-img">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="row">
                        <p className="m-0">
                            <strong>{data.author}</strong>
                        </p>&nbsp;
                        <p className="m-0">{data.comment}</p>
                    </div>
                    <div className="row">
                        <span className="me-2">1d</span>
                        <span className="me-2">1 like</span>
                        <span className="me-2">Reply</span>
                    </div>
                </div>
             
            </a>
        </div>
    );
}
