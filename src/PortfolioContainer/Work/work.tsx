import React from "react";

const Work: React.FC = () => {
  return (
    <>
      {/* MICROVERSE */}
      <div className="item">
        <div className="item-header">
          <div className="company">
            <span className="dot"></span>
            <h3>MICROVERSE</h3>
          </div>
          <span className="date">Feb. 2023 – Present</span>
        </div>

        <h4>Mentor (Volunteer)</h4>
        <ul>
          <li>
            Mentoring junior web developers, providing technical support through
            code reviews.
          </li>
          <li>
            Proposing improvements to code organization to improve code quality
            and performance.
          </li>
          <li>
            Providing advice and tips on maintaining motivation and longevity in
            the program.
          </li>
        </ul>
      </div>

      {/* LOCAL GAVMENT */}
      <div className="item">
        <div className="item-header">
          <div className="company">
            <span className="dot"></span>
            <h3>INSTITUTE OF LOCAL GOVERNMENT STUDIES</h3>
          </div>
          <span className="date">Oct. 2020 – Present</span>
        </div>

        <h4>IT Officer</h4>
        <ul>
          <li>
            Configured, monitored, maintained, and controlled IT room
            equipment.
          </li>
          <li>
            Assisted in connecting the Local Area Network to Local Government.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Work;
