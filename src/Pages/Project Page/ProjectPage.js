import Navigation from "../../Components/Navigation/Navigation";
import '../../Assets/Styles/projectpagestyle.css';
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { projectsData } from "../../Utils/Data/dataConfig";
import { Link } from "react-router-dom";

const ProjectPage = () => {

    const { id } = useParams();

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        setProjectData(projectsData.find((item) => item.id === id));
    }, [id]);

    if(!projectData) {
        return null;
    }
    

    return (
        <>
            <Navigation/>
            <main>
                <section className="container pt-5 pb-5">
                    <img src={projectData.mainImage} alt="" className="project-main-image"></img>
                    <h3 className="mt-5 text-center fw-bold">{projectData.title}</h3>
                </section>

                <section className="container pb-5 project-about-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="project-widget-wrapper">
                                <h3>About</h3>
                                <p>{projectData.description}</p>
                                <ul className="mt-4">
                                    {
                                        projectData.tools&&projectData.tools.map((item) => (
                                            <li style={{listStyle: "circle"}}>{item.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container pt-5 pb-5 project-about-container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="project-widget-wrapper text-center">
                               <h3>Year</h3>
                               <p className="light-blue fw-bold">{projectData.year}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="project-widget-wrapper text-center">
                               <h3>Client</h3>
                               <p className="light-blue fw-bold">{projectData.client}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="project-widget-wrapper text-center">
                               <h3>Service</h3>
                               <p className="light-blue fw-bold">{projectData.service}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="project-widget-wrapper text-center">
                               <h3>Link</h3>
                               <Link to={`https://${projectData.link}`}><p className="light-blue fw-bold">{projectData.link}</p></Link>
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