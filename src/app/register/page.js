import instagram from "@/app/images/instagram.png";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
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
                    <form className="card-form">
                        <input
                            type="text"
                            placeholder="Mobile Number or Email"
                        />
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <p className="mb-3">
                            People who use our service may have uploaded your
                            contact information to Instagram.{" "}
                            <a href="">Learn More</a>
                        </p>
                        <p className="mb-3">
                            By signing up, you agree to our Terms , Privacy
                            Policy and Cookies Policy.
                        </p>
                        <button className="btn btn-opacity">Sign up</button>
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
