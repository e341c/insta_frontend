"use client";
import { useState, useRef, useEffect } from "react";
import arrowLeft from "@/app/images/arrow-left-solid.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { createPost } from "@/app/store/slices/postSlice";

export default function AddPost({onClose}) {
    const inputRef = useRef(null);
    const ref = useRef();
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState('')

    const dispatch = useDispatch()

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            setFile(null);
        }
    };

    console.log(file);
    console.log(desc);

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    const handleClearFile = () => {
        setFile(null);
    };

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append("image", file)
        formData.append("description", desc)

        dispatch(createPost(formData))
    }

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
                        <button className="btn-none" onClick={handleClearFile}>
                              <Image
                            src={arrowLeft}
                            className="modal-icon"
                            alt=""
                            />
                        </button>
                    )}
                    <p>Create new post</p>
                    {file && <button onClick={handleSubmit} className="btn-text btn-none">Share</button>}
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
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder="Write a caption"
                                ></textarea>
                            </div>
                        </div>
                    )}
                    {!file && (
                        <div className="modal-addfile">
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
