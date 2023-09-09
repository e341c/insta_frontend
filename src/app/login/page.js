import instagram from "@/app/images/instagram.png";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <section className="main mt-5">
            <div>
                <div className="card">
                    <Image className="mb-3" src={instagram} />
                    <form className="card-form mb-3">
                        <input
                            type="text"
                            placeholder="Phone number, username, or email"
                        />
                        <input type="text" placeholder="Password" />
                        <button className="btn btn-opacity">Log in</button>
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
