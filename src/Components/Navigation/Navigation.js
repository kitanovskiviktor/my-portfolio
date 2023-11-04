import Button from '../Button/Button';
import './navigationstyle.css';

const Navigation = () => {
    return (
        <>
        <header>
            <nav className="container pt-4 navigation-section">
                <div className="row">
                    <ul className="d-flex justify-content-between align-items-center">
                        <li>logo</li>
                        <ul className="d-flex gap-5">
                            <li className="active">Home</li>
                            <li>About</li>
                            <li>Works</li>
                            <li>Contact</li>
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