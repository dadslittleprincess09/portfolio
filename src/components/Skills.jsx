import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-3 bg-light">
      <div className="container-fluid px-5">
        <h2 className="fw-bold text-center mb-5  section-title">SKILLS</h2>

        <div className="row">

          {/* Web Technologies */}
          <div className="col-md-4 mb-4">
            <div className="card skill-card border-0 p-4 h-100">
              <h5 className="fw-bold ">Web Technologies</h5>
              <ul className="mb-0">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="col-md-4 mb-4">
            <div className="card skill-card border-0 p-4 h-100">
              <h5 className="fw-bold">Backend & Database</h5>
              <ul className="mb-0">
                <li>Spring Boot</li>
                <li>REST APIs</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>

          {/* Tools & Others */}
          <div className="col-md-4 mb-4">
            <div className="card skill-card border-0 p-4 h-100">
              <h5 className="fw-bold ">Tools & Technologies</h5>
              <ul className="mb-0">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>

         

        </div>
      </div>
    </section>
  );
};

export default Skills;
