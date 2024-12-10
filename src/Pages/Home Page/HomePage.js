import '../../Assets/Styles/homestyle.css';
import image from '../../Assets/Images/1687385565770.jpg';
import TechnologyCard from '../../Components/TechnologyCard';
import { projectsData, skillsData } from '../../Utils/Data/dataConfig';
import ProjectCard from '../../Components/ProjectCard';

const HomePage = () => {


    return (
        <>
           <main>
                <section className="pt-5">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-6">
                                <div className="wiget-box d-flex gap-5 align-items-center main-home-box flex-column">
                                    <div className="flex-fill h-100 box-img-wrapper">
                                        <img className="w-100" alt="" src={image}></img>
                                    </div>
                                    <div className="flex-fill h-100">
                                        <h4 className="text-infos mb-2 text-uppercase">Frontend Developer</h4>
                                        <h1 className="text-title mb-2">Viktor Kitanovski</h1>
                                    </div>
                                    <div className="social-icon-wrapper d-flex gap-3">
                                        <div>
                                          <a href="https://www.linkedin.com/in/viktor-kitanovski-99513b163/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/kitanovskiviktor" target="_blank"><i class="fa-brands fa-github"></i></a>
                                        </div>
                                        <div>
                                            <a href="http://kitanovskiviktor.mk/CV.pdf" target="_blank" className="text-white">CV</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 mb-5">
                    <div className="container pt-5 dark-color-bg border-radius-20 px-5 pb-5">
                        <div className="row">
                            <div>
                                <h2 className="text-white" style={{fontWeight: "200"}}>About Me</h2>
                                <p className="light-grey mt-2">
                                Born and raised in Skopje, Macedonia, currently pursuing a degree in Computer Science at Faculty of Computer Science and Engineering. Introduced to programming at the age of 13, I have diligently honed my skills, evolving into a proficient Frontend Developer. My expertise lies in crafting seamless user experiences through innovative web solutions.
                                Fueled by a passion for technology and space exploration, I dedicate my free time to continuous learning. Beyond coding, I find fulfillment in winter snowboarding and learning more about the space.
                                Eager to contribute my skills and knowledge to transformative projects. I invite you to explore my portfolio and connect to discuss potential collaborations. 
                                Let's embark on a journey to elevate your digital presence together.</p>
                            </div>
                            <div className="contact-icon-wrapper mt-4 d-flex flex-column flex-wrap gap-4">
                                <div className="d-flex gap-3">
                                    <i class="fa-regular fa-envelope"></i>
                                    <p className="light-grey">Email: viktor.kitanovski45@gmail.com</p>
                                </div>
                                <div className="d-flex gap-3">
                                <i class="fa-solid fa-map"></i>
                                    <p className="light-grey">Address: Skopje, Republic of Macedonia</p>
                                </div>
                                <div className="d-flex gap-3">
                                <i class="fa-solid fa-phone"></i>
                                    <p className="light-grey">Phone: +389 74 244 414</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 mb-5">
                    <div className="container pt-5 dark-color-bg border-radius-20 px-5 pb-5">
                        <div className="row">
                            <div className="technical-skills-container col-md-12">
                                <h2 className="text-white" style={{fontWeight: "200"}}>Technologies</h2>
                                <div className="mt-3 d-flex justify-content-between flex-wrap gap-3">
                                {
                                    skillsData.map((item) => (
                                        <TechnologyCard props={item}/>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 mb-5">
                    <div className="container pt-5 dark-color-bg border-radius-20 px-5 pb-5">
                        <div className="row">
                            <div className="technical-skills-container">
                                <h2 className="text-white" style={{fontWeight: "200"}}>Projects</h2>
                                <div className="mt-3 d-flex justify-content-between flex-wrap gap-3 flex-column">
                                {
                                    projectsData.map((item) => (
                                        <ProjectCard props={item}/>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;