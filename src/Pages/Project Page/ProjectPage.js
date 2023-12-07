import Navigation from "../../Components/Navigation/Navigation";
import testImage from '../../Assets/Images/projecttest.png';
import '../../Assets/Styles/projectpagestyle.css';
import Footer from "../../Components/Footer/Footer";

const ProjectPage = () => {
    return (
        <>
            <Navigation/>
            <main>
                <section className="container pt-5 pb-5">
                    <img src={testImage} alt="" className="project-main-image"></img>
                    <h3 className="mt-5 text-center fw-bold">Indian Motorcycle MK</h3>
                </section>

                <section className="container pb-5 project-about-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="project-widget-wrapper">
                                <h3>Indian Motorcycle MK</h3>
                                <p className="text-infos">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="project-widget-wrapper">
                                <h3>About</h3>
                                <p className="text-infos">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container pt-5 pb-5 project-about-container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="project-widget-wrapper text-center">
                               <h3>Year</h3>
                               <p className="light-blue fw-bold">2023</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="project-widget-wrapper text-center">
                               <h3>Client</h3>
                               <p className="light-blue fw-bold">Indian Motorcycle</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="project-widget-wrapper text-center">
                               <h3>Service</h3>
                               <p className="light-blue fw-bold">Web Development</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="project-widget-wrapper text-center">
                               <h3>Link</h3>
                               <p className="light-blue fw-bold">indianmotorcycle.mk</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default ProjectPage;