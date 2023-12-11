import Navigation from "../../Components/Navigation/Navigation";
import '../../Assets/Styles/contactpagestyle.css';
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import { sendEmail } from "../../Utils/appFunctions/appFunctions";
import { useRef } from "react";


const ContactPage = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    return (
        <>
            <Navigation/>
            <main>
                <section className="container pt-5 pb-5 contact-page-conntainer">
                    <div className="row">
                        <div className="col-md-5">
                            <div>
                                <h3 className="size-16 text-uppercase">Contact Info</h3>
                                <div className="mt-5">
                                    <span className="contact-page-icon-wrapper">
                                        <i className="fa-solid fa-envelope light-blue contact-page-icon"></i>
                                    </span>
                                    <p className="d-inline-block mx-3">viktor.kitanovski45@gmail.com</p>
                                </div>
                                <div className="mt-5">
                                    <span className="contact-page-icon-wrapper">
                                    <i class="fa-solid fa-phone light-blue contact-page-icon"></i>
                                    </span>
                                    <p className="d-inline-block mx-3">+389 74 244 414</p>
                                </div>
                                <div className="mt-5">
                                    <span className="contact-page-icon-wrapper">
                                    <i class="fa-solid fa-location-dot light-blue contact-page-icon"></i>
                                    </span>
                                    <p className="d-inline-block mx-3">Skopje, Macedonia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="bg-white">
                                <h1>Let's work <span className="light-blue">together</span></h1>
                                <input placeholder="Your Name *" className="contact-page-input mt-3" ref={nameRef}/>
                                    <input placeholder="Your Email *" className="contact-page-input mt-3" ref={emailRef}/>
                                    <input placeholder="Your Subject *" className="contact-page-input mt-3" ref={subjectRef}/>
                                    <textarea placeholder="Your Message *" className="contact-page-input mt-3" ref={messageRef}></textarea>
                                    <Button text="Send Message" classes="mt-4 d-block mx-auto"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default ContactPage;