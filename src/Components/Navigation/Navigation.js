import Button from '../Button/Button';
import './navigationstyle.css';
import logo from '../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container justify-content-around">
                <Link to="/"><img src={logo} alt='' className="nav-logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav justify-content-between align-items-center w-100">
                    <div className='nav-items-list'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/works">Works</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <Link to="/contact"><Button text="Let's talk"/></Link>
                </div>
                </div>
            </div>
        </nav>
        </header>

        </>
    )
}

export default Navigation;