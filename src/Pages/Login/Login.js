import axios from "axios";
import Button from "../../Components/Button/Button";
import Navigation from "../../Components/Navigation/Navigation";

const Login = () => {


    // const test = () => {
        
    //     const data = {
    //         username: "viktor2",
    //         password: "viktor",
    //     }

    //     axios.post("http://localhost:3001/api/register", data)
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    // }

    return (
        <>
        <Navigation/>
        <main>
            <section className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <input className="contact-page-input mb-4" placeholder="Username"/>
                        <input className="contact-page-input" placeholder="Password"/>
                        <Button text="Log In" classes="mx-auto d-block mt-4"/>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Login;