import Navigation from "../../Components/Navigation/Navigation";
import '../../Assets/Styles/homestyle.css';
import HomeLayout from "../../Layouts/HomeLayout";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Navigation/>
            <HomeLayout/>
            <Footer/>
        </>
    )
}

export default HomePage;