import Profile from "../Profile/Profile";
import Footer from "./footer/Footer";
import Navbar from "./Navber/Navbar";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container" id ="home">
             <Navbar />
            <Profile />
            <Footer />  
            

        </div>
    )
}