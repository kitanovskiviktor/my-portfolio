import image from '../Assets/Images/1687385565770.jpg';
import signImage from '../Assets/Images/sign.png';
import linkIcon from '../Assets/Images/link-icon.svg';
import { FiLinkedin } from 'react-icons/fi';
import { TiSocialGithubCircular } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <main>
                <section className="pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="wiget-box d-flex gap-5 align-items-center">
                                    <div className="flex-fill box-img-wrapper h-100">
                                        <img className="w-100" alt="" src={image}></img>
                                    </div>
                                    <div className="flex-fill h-100">
                                    <h4 className="text-infos mb-2 text-uppercase">Front End Developer</h4>
                                            <h1 className="text-title mb-2">Viktor Kitanovski</h1>
                                            <p className="text-desc">Front End Developer based in Macedonia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 align-self-end d-flex gap-3">
                               <div className="col-md-6">
                                    <div className="wiget-box d-flex align-items-center flex-column padding-24">
                                        <img src={signImage} alt=""></img>
                                        <div className="flex-fill h-100 w-100 d-flex justify-content-between">
                                                <div>
                                                <p className="text-desc text-uppercase size-12">More about me</p>
                                                <h1 className="text-subtitle mt-2">Credentials</h1> 
                                                </div>
                                                <div>
                                                    <Link to="/credentials"><img src={linkIcon} alt=""/></Link>
                                               </div>
                                        </div>
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="wiget-box d-flex align-items-center flex-column padding-24">
                                        <img src={signImage} alt=""></img>
                                        <div className="flex-fill h-100 w-100 d-flex justify-content-between">
                                                <div>
                                                <p className="text-desc text-uppercase size-12">Showcase</p>
                                                <h1 className="text-subtitle mt-2">Projects</h1>
                                                </div>
                                               <div>
                                               <Link to="/works"><img src={linkIcon} alt=""/></Link>
                                               </div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-md-3">
                                    <div className="wiget-box d-flex align-items-center flex-column padding-24">
                                        <img src={signImage} alt=""></img>
                                        <div className="flex-fill h-100 w-100 d-flex justify-content-between">
                                                <div>
                                                <p className="text-desc text-uppercase size-12">Blog</p>
                                                <h1 className="text-subtitle mt-2">My Blog</h1>
                                                </div>
                                               <div>
                                                <img src={linkIcon} alt=""/>
                                               </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="wiget-box d-flex align-items-center padding-24 text-center gap-4">
                                        <div className="client-info-wrapper">
                                            <h2 className="light-blue mb-3">1</h2>
                                            <p className='text-desc text-uppercase size-12'>Years Experience</p>
                                        </div>
                                        <div className="client-info-wrapper">
                                            <h2 className="light-blue mb-3">04</h2>
                                            <p className='text-desc text-uppercase size-12'>CLIENTS</p>
                                        </div>
                                        <div className="client-info-wrapper">
                                            <h2 className="light-blue mb-3">04</h2>
                                            <p className='text-desc text-uppercase size-12'>TOTAL PROJECTS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="wiget-box d-flex align-items-center flex-column padding-24">
                                        <div className="client-info-wrapper d-flex w-100 justify-content-around">
                                            <FiLinkedin className='home-social-icon'/>
                                            <TiSocialGithubCircular className='home-social-icon mx-3'/>
                                        </div>
                                        <div className="flex-fill h-100 w-100 d-flex justify-content-between mt-2">
                                                <div>
                                                <p className="text-desc text-uppercase size-12">Stay with me</p>
                                                <h1 className="text-subtitle mt-2">Socials</h1>
                                                </div>
                                               <div>
                                                <Link to="/contact"><img src={linkIcon} alt=""/></Link>
                                               </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomeLayout;