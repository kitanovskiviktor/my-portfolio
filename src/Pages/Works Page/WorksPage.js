import Navigation from "../../Components/Navigation/Navigation";
import blueStar from '../../Assets/Images/blue-star.png';
import ProjectCard from "../../Components/Project Card/ProjectCard";
import { projectsData } from "../../Utils/Data/dataConfig";
import Footer from "../../Components/Footer/Footer";

const WorksPage = () => {
    return (
        <>
            <Navigation/>
            <main>
                <section className="container pt-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="fw-bold"><img src={blueStar} alt="" className="mx-3"/>ALL PROJECTS<img src={blueStar} alt="" className="mx-3"/></h1>
                        </div>
                    </div>
                </section>

                <section className="container pt-5">
                    <div className="row">
                        {
                            projectsData.map((item) => (
                                <div className="col-md-4">
                                    <ProjectCard props={item}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default WorksPage;