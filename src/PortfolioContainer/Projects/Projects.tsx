import React from "react";
import "./Projects.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

// image import (recommended)
import weatherImg from "../../assets/Ganiyu/weatherf.webp";
import Truedemo from "../../assets/Ganiyu/my pic.jpeg";
import Sagani from "../../assets/Ganiyu/Sagani.png";

const Project: React.FC = () => {
  return (
    <section className="projects-container" id="projects">
      <ScreenHeading title="Projects" subHeading="Some of My Recent Works" />

      <div className="project-card">
        {/* LEFT IMAGE */}
        <div className="project-image">
          <img src={weatherImg} alt="Weather App" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="project-details">
          <h2 className="project-title">Weather</h2>

          <p className="project-text">
            Weather forecast is a mobile application that gives users overview
            of weather conditions in your location, it will predict the next
            10 days weather forecast in your locality. It also has search
            functional where users can search for weather conditions in their
            locality by using the country, regions, city names, etc.
          </p>

          <h4 className="project-subtitle">Built with:</h4>
          <ul className="project-tech">
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Daisy UI</li>
          </ul>

          <div className="project-actions">
            <a href="https://github.com/abdul-ganiyu/weather-app" target="_blank" className="btn-source">See Source 🚀</a>
            <a href="https://weather-app-r266.onrender.com/" target="_blank" className="btn-demo">Live Demo 🚀</a>
          </div>
        </div>
        
      </div> 

      <div className="project-card">
        {/* LEFT IMAGE */}
        <div className="project-image">
          <img src={Truedemo} alt="Team Medic" style={{ height: "350px" }} />

        </div>

        {/* RIGHT CONTENT */}
        <div className="project-details">
          <h2 className="project-title">Team Medic </h2>

          <p className="project-text">
           Team Medic is a comprehensive healthcare management web application designed 
           to streamline medical tasks for both patients and healthcare providers. Users can easily 
           track patient records, schedule and manage appointments, monitor treatment plans, and access 
           important medical information in one place.
          </p>

          <h4 className="project-subtitle">Built with:</h4>
          <ul className="project-tech">
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Daisy UI</li>
          </ul>

          <div className="project-actions">
            <a href="https://web.facebook.com/DivisionOneLeagueUpdateGH/posts/true-demo-fc-officially-break-for-4-weeks/1541192530513560/?_rdc=1&_rdr#" target="_blank" className="btn-source">See Source 🚀</a>
            <a href="https://www.instagram.com/truedemofc/" target="_blank" className="btn-demo">Live Demo 🚀</a>
          </div>
        </div>
        
      </div> 
 
  <div className="project-card">
        {/* LEFT IMAGE */}
        <div className="project-image">
          <img src={Sagani} alt="Sagani News" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="project-details">
          <h2 className="project-title">Sagani News</h2>

          <p className="project-text">
            Sagani News is a comprehensive news application that aggregates and presents news from various sources. 
            It allows users to browse, search, and read the latest news articles in a clean and user-friendly interface.
          </p>

          <h4 className="project-subtitle">Built with:</h4>
          <ul className="project-tech">
            <li>React</li>
            <li>Redux</li>
            <li>Tailwind CSS</li>
            <li>Daisy UI</li>
          </ul>

          <div className="project-actions">
            <a href="https://github.com/abdulganiyuaziz/sagani" target="_blank" className="btn-source">See Source 🚀</a>
            <a href="https://www.instagram.com/sagani_tv/reels/?hl=en" target="_blank" className="btn-demo">Live Demo 🚀</a>
          </div>
        </div>
        
      </div> 

    

      
    </section>
  );
};

export default Project;
