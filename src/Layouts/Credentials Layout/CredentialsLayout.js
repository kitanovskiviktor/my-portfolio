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
                        <p className="text-desc mt-3 size-16">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                        Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.</p>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">EDUCATION</h2>
                            <ul>
                                {
                                    <ul className="mt-4">
                                    {experienceData.map((item, index) => (
                                      <>
                                        <li className="mb-4" key={index}>
                                          <p className="text-desc mb-3 size-16">{item.time}</p>
                                          <h2 className="size-18 light-blue mb-2">{item.job}</h2>
                                          <p className="text-desc size-14">{item.desc}</p>
                                          <p className="mt-2 size-14">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor puru</p>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                }
                            </ul>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">EXPERIENCE</h2>
                            <ul>
                                {
                                    <ul className="mt-4">
                                    {educationData.map((item, index) => (
                                      <>
                                        <li className="mb-4" key={index}>
                                          <p className="text-desc mb-3 size-16">{item.time}</p>
                                          <h2 className="size-18 light-blue mb-2">{item.job}</h2>
                                          <p className="text-desc size-14">{item.desc}</p>
                                          <p className="mt-2 size-14">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor puru</p>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                }
                            </ul>
                        </div>

                        <div className="col-md-12 pt-5">
                            <h2 className="size-18">SKILLS</h2>
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