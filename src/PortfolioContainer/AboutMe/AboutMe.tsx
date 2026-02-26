import profileImg from "../../assets/Ganiyu/A~Ganiyu.jpg";
import "./AboutMe.css";
import Title from "../../components/Heading/Heading";

import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <>
      <Title title="About Me" subtitle="Why Choose Me?" />

      <div className="about-container" id="AboutMe">
        <div className="about-content">
          {/* LEFT IMAGE */}
          <img src={profileImg} alt="Abdul Ganiyu" />

          {/* RIGHT TEXT */}
          <div className="about-text-content">
            <p>
              Full-stack developer and Team Medic who is passionate about
              open-source projects and enjoys writing clean, reusable code.
              I also provide first aid and thrive in collaborative, dynamic environments.
            </p>

            <div className="highlights">
              <h2>Here are a few highlights:</h2>
              <ul>
                <li>Team Medic</li>
                <li>Web Developer</li>
                <li>React and React Native</li>
                <li>HTML & CSS</li>
                <li>JavaScript & TypeScript</li>
              </ul>
            </div>

            {/* BUTTONS */}
            <div className="profile-options">
           
              <Link 
              to="ContactMe" className="btn primary-btn"
                           smooth={true}
                            duration={500} 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                              HireMe
                </Link>

              <a href="/Abdul.pdf" download>  
                <button className="btn highlighted-btn">Get Resume
                  
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;