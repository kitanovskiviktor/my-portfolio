import { achievementsData, educationData, experienceData, skillsData } from "../../Utils/Data/dataConfig";
import blueStar from '../../Assets/Images/blue-star.png';

const CredentialsLayout = () => {
    return (
        <>
         <main>
                <section className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                        <h2 className="size-18">ABOUT ME</h2>
                        <p className="text-desc mt-3 size-16">
                        Born and raised in Skopje, Macedonia, currently pursuing a degree in Computer Engineering at Faculty of Computer Engineering and Science. Introduced to programming at the age of 13, 
                        I have diligently honed my skills, evolving into a proficient Front-end Developer. 
                        My expertise lies in crafting seamless user experiences through innovative web solutions.<br/>
                        </p>
                        <p className="text-desc mt-3 size-16">
                        Fueled by a passion for technology and space exploration, I dedicate my free time to continuous learning. Beyond coding, 
                        I find fulfillment in winter snowboarding and learning more about the space.
                        </p>
                        <p className="text-desc mt-3 size-16">
                        Eager to contribute my skills and knowledge to transformative projects, I invite you to explore my portfolio and connect to discuss potential collaborations. 
                        Let's embark on a journey to elevate your digital presence together.
                        </p>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">EXPERIENCE</h2>
                            <ul>
                                {
                                    <ul className="mt-4">
                                    {experienceData.map((item, index) => (
                                      <>
                                        <li className="mb-4" key={index}>
                                          <p className="text-desc mb-3 size-16">{item.time}</p>
                                          <h2 className="size-18 light-blue mb-2">{item.job}</h2>
                                          <p className="text-desc size-14">{item.desc}</p>
                                          
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                }
                            </ul>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">EDUCATION</h2>
                            <ul>
                                {
                                    <ul className="mt-4">
                                    {educationData.map((item, index) => (
                                      <>
                                        <li className="mb-4" key={index}>
                                          <p className="text-desc mb-3 size-16">{item.time}</p>
                                          <h2 className="size-18 light-blue mb-2">{item.job}</h2>
                                          <p className="text-desc size-14">{item.desc}</p>
                                          
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                }
                            </ul>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">TECH SKILLS</h2>
                            <ul>
                                {
                                    <ul className="mt-4">
                                    {skillsData.map((item, index) => (
                                      <>
                                        <li className="mb-4" key={index}>
                                          <img src={blueStar} alt="" style={{width: `20px`}}/>
                                          <h2 className="size-18 light-blue mb-2 mt-2">{item.title}</h2>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                }
                            </ul>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">ACHIEVEMENTS</h2>
                            <ul>
                                {
                                    <ul className="mt-4">
                                    {achievementsData.map((item, index) => (
                                      <>
                                        <li className="mb-4" key={index}>
                                            <p className="text-desc mb-3 size-16">{item.time}</p>
                                          <h2 className="size-18 light-blue mb-2">{item.title}</h2>
                                          <p className="text-desc size-14">{item.desc}</p>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CredentialsLayout;