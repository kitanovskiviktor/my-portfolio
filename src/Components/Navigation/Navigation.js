import Button from '../Button/Button';
import './navigationstyle.css';
import logo from '../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
        <header>
            <nav className="container pt-4 navigation-section">
                <div className="row">
                    <ul className="d-flex justify-content-between align-items-center">
                        <li><img src={logo} alt='' className="nav-logo"/></li>
                        <ul className="d-flex gap-5">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/works">Works</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <li><Button text="Let's talk"/></li>
                    </ul>
                </div>
            </nav>
        </header>

        </>
    )
}

export default Navigation;