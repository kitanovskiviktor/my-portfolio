import Navigation from "../../Components/Navigation/Navigation";
import blueStar from '../../Assets/Images/blue-star.png';
import hangingIcon from '../../Assets/Images/hanging-icon.png';
import { educationData, experienceData } from "../../Utils/Data/dataConfig";
import Footer from "../../Components/Footer/Footer";
import WidgetBox from "../../Components/Widget Box/WidgetBox";

const AboutPage = () => {
    return (
        <>
            <Navigation/>
            <main>
                <section className="container pt-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="fw-bold"><img src={blueStar} alt="" className="mx-3"/>SELF-SUMMARY<img src={blueStar} alt="" className="mx-3"/></h1>
                        </div>

                        <div className="col-md-12 mt-5">
                            <div className="wiget-box d-flex gap-5 align-items-center position-relative">
                                <div className="flex-fill h-100">
                                    <img src={hangingIcon} alt="" className="hanging-star-icon"/>
                                    <h1 className="text-title mb-2">Viktor Kitanovski</h1>
                                    <p className="text-desc">Passionate about the dynamic world of front-end development. Currently, I am expanding my expertise to encompass the full spectrum of web development, delving into the complexities of backend technologies to evolve into a proficient full-stack developer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <WidgetBox data={experienceData} title='EXPERIENCE'/>
                        </div>
                        <div className="col-md-6">
                            <WidgetBox data={educationData} title='EDUCATION'/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default AboutPage;