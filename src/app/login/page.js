import instagram from "@/app/images/instagram.png"
import Image from "next/image";

export default function Login() {
    return (
        <section className="mt-5">
            <div className="card">
                <Image className="mb-3" src={instagram} />
                <form className="card-form">
                    <input type="text" placeholder="Phone number, username, or email" />
                    <input type="text" placeholder="Password" />
                    <button className="btn btn-opacity">Log in</button>
                </form>
                <h5>OR</h5>
            </div>
            <div className="card card-padding">
              <h6>Don't have an account? <a href="">Sign up</a></h6>
            </div>
        </section>
    );
}
