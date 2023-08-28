import instagram from "@/app/images/instagram.png"
import Image from "next/image";

export default function Register() {
    return (
        <section className="mt-3">
            <div className="card">
                <Image src={instagram} />
                <h5>Sign up to see photos and videos from your friends.</h5>
                <button className="btn">
                    <i></i>Log in with Facebook
                </button>     
                <h5>OR</h5>
                <form className="card-form">
                    <input type="text" placeholder="Mobile Number or Email" />
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <p>
                        People who use our service may have uploaded your
                        contact information to Instagram.{" "}
                        <a href="">Learn More</a>
                    </p>
                    <p>
                        By signing up, you agree to our Terms , Privacy Policy
                        and Cookies Policy.
                    </p>
                    <button className="btn btn-opacity">Sign up</button>
                </form>
            </div>
            <div className="card card-padding">
              <h6>Have an account? <a href="">Log in</a></h6>
            </div>
        </section>
    );
}
