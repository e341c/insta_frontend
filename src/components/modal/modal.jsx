"use client";
import { useState, useRef, useEffect } from "react";
import arrowLeft from "@/app/images/arrow-left-solid.svg";
import Image from "next/image";

export default function Modal({onClose}) {
    const inputRef = useRef(null);
    const ref = useRef();
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            setFile(null);
        }
    };

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    const handleClearFile = () => {
        setFile(null);
    };

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [onClose]);

    return (
        <div className="modal-background">
            <div className="modal" ref={ref}>
                <div className="modal-top">
                    {file && (
                        <Image
                            src={arrowLeft}
                            onClick={handleClearFile}
                            className="modal-icon"
                            alt=""
                        />
                    )}
                    <p>Create new post</p>
                    {file && <p className="btn-text">Share</p>}
                </div>
                <div className="modal-main">
                    {file && (
                        <div className="modal-caption-step">
                            <div className="modal-img">
                                <img src={file} alt="" />
                            </div>
                            <div className="modal-caption">
                                <textarea
                                    className="modal-textarea"
                                    name=""
                                    id=""
                                    rows="8"
                                    placeholder="Write a caption"
                                ></textarea>
                            </div>
                        </div>
                    )}
                    {!file && (
                        <div>
                            <p className="mb-3">Drag photos and videos here</p>
                            <div>
                                <input
                                    ref={inputRef}
                                    type="file"
                                    hidden
                                    onChange={handleFileChange}
                                />
                                <button
                                    className="btn btn-sized"
                                    onClick={handleButtonClick}
                                >
                                    Select from computer
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
