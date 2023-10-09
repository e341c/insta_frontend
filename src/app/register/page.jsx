'use client'
import instagram from "@/app/images/Instagram.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";

export default function Register() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const hadnleSubmit = (e) => {
        e.preventDefault()

        const data = {
            email,
            username,
            full_name: fullname,
            password
        }

        dispatch(signUp(data, router))
    }

    return (
        <section className="main">
            <div>
                <div className="card mt-5">
                    <Image className="mb-3" src={instagram} />
                    <h5 className="mb-3">Sign up to see photos and videos from your friends.</h5>
                    <button className="btn mb-3">
                        <i></i>Log in with Facebook
                    </button>
                    <h5 className="mb-3">OR</h5>
                    <form className="card-form" onSubmit={hadnleSubmit}>
                        <input
                            type="email"
                            placeholder="Mobile Number or Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)}/>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <p className="mb-3">
                            People who use our service may have uploaded your
                            contact information to Instagram.{" "}
                            <a href="">Learn More</a>
                        </p>
                        <p className="mb-3">
                            By signing up, you agree to our Terms , Privacy
                            Policy and Cookies Policy.
                        </p>
                        <button className="btn btn-opacity" type="submit">Sign up</button>
                    </form>
                </div>
                <div className="card card-padding">
                    <h6 className="mb-3 mt-3">
                        Have an account? <Link href={"/login"}>Log in</Link>
                    </h6>
                </div>
            </div>
        </section>
    );
}
