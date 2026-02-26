import React from "react";
import "./frontend.css"
type Skill = {
  name: string;
  level: number;
};

const frontendSkills: Skill[] = [
  { name: "HTML", level: 90 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "React Native", level: 95 },
  { name: "Redux", level: 85 },
  { name: "Bootstrap", level: 90 },
  { name: "TailwindCSS", level: 95 },
  { name: "Jest Test", level: 80 },
];

const FrontEnd: React.FC = () => {
  return (
    <div className="skills-grid">
      {frontendSkills.map((skill) => (
        <div className="skill-item" key={skill.name}>
          <div className="skill-title">
            <span className="dot"></span>
            <h4>{skill.name}</h4>
          </div>

          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrontEnd;
