'use client'
import instagram from "@/app/images/Instagram.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getToken } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const isAuth = useSelector((state) => state.auth.isAuth)
    const currentUser = useSelector((state) => state.auth.currentUser)

    const dispatch = useDispatch()

    const logIn = (e) => {
        e.preventDefault()

        const data = {
            email, 
            password
        }

        dispatch(getToken(data, router))
    }

    console.log(isAuth, currentUser);
    
    return (
        <section className="main mt-5">
            <div>
                <div className="card">
                    <Image className="mb-3" src={instagram} />
                    <form className="card-form mb-3" onSubmit={logIn} >
                        <input
                            type="text"
                            placeholder="Phone number, username, or email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn btn-opacity" type="submit" >Log in</button>
                    </form>
                </div>
                <div className="card card-padding">
                    <h6 className="mb-2 mt-2">
                        Don't have an account? <Link href={'/register'}>Sign up</Link>
                    </h6>
                </div>
            </div>
        </section>
    );
}
