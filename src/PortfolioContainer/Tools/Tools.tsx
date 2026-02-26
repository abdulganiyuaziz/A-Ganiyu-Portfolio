import React from "react";
import "./Tools.css"
type Skill = {
  name: string;
  level: number;
};

const Tools: Skill[] = [
  { name: "Git", level: 90 },
  { name: "GitHub", level: 90 },
  { name: "Mobile/Responsive Dev", level: 85 },
  { name: "Dev Tools", level: 85 },
  { name: "Remote Pair-Programming", level: 95 },
  { name: "Teamwork", level: 85 },
  { name: "Code Review", level: 90 },
  { name: "Mentoring", level: 95 },
  { name: "Communication", level: 80 },
];

const Tool: React.FC = () => {
  return (
    <div className="skills-grid">
      {Tools.map((skill) => (
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

export default Tool;
