import React from "react";
import "./backeds.css"
type Skill = {
  name: string;
  level: number;
};

const frontendSkills: Skill[] = [
  { name: "Ruby on Rails", level: 90 },
  { name: "Laravel", level: 90 },
  { name: "My SQL", level: 85 },
  { name: "PostgreSQL", level: 85 },
  { name: "Ruby", level: 95 },
  { name: "Rspec", level: 85 },
  { name: "Capybara", level: 90 },
  { name: "Selenium", level: 95 },
  { name: "TDD", level: 80 },
];

const Backend: React.FC = () => {
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

export default Backend;
