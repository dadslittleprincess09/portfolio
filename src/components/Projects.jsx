import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container-fluid px-5">
        <h2 className="fw-bold mb-5 text-center section-title">PROJECTS</h2>

        <div className="row g-4">

          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card shadow h-100 project-card">
              <img
                src="https://images.pexels.com/photos/6316243/pexels-photo-6316243.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="card-img-top project-img p-3"
                alt="Grievance System"
              />
              <div className="card-body">
                <h5>AI-Based Grievance Management System</h5>
                <p>
                    A full-stack web application for reporting civic issues like roads, garbage, and child labour, developed using Spring Boot, MySQL, HTML, CSS and JavaScript.
                </p>

                <a
                  href="https://github.com/dadslittleprincess09/smartseva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-sm px-4 py-2"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card shadow h-100 project-card">
              <img
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d"
                className="card-img-top project-img p-3"
                alt="Finance Advisor"
              />
              <div className="card-body">
                <h5>Smart Finance Advisor</h5>
                <p>
                  Finance management app to track income, visualize expenses, 
                  and analyze financial health using AI insights. Built with 
                  React.js, JavaScript, HTML, and CSS.
                </p>

                <a
                  href="https://github.com/dadslittleprincess09/Smart_personal_finance_advisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-sm px-4 py-2 "
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card shadow h-100 project-card">
              <img
                src="https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=800&q=80"
                className="card-img-top project-img p-3"
                 
                alt="CakeGPT"
              />
                <div className="card-body">
                <h5>CakeGPT – Online Cake Ordering Platform</h5>
                <p>
               A responsive cake ordering website with a clean UI and smooth user experience, built using HTML, CSS, JavaScript, and Bootstrap for seamless functionality across all devices.
                </p>

                <a
                  href="https://github.com/dadslittleprincess09/CakeGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning btn-sm px-4 py-2"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
