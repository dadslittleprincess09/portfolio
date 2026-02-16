import React from "react";

const Internship = () => {
  return (
    <section id="internship" className="py-5 bg-light">
      <div className="container-fluid px-5">
        <h2 className="fw-bold text-center mb-5 section-title">INTERNSHIP</h2>

        <div className="card shadow-lg border-0 p-4 internship-card">
          <h5 className="fw-bold fs-3">
            Java Full Stack Intern
          </h5>

          <p className="fw-semibold mb-1">
            SocialTek AI & ML Business Solutions
          </p>

          <p className="text-muted mb-3">
            Duration: 6 months
          </p>

          <p className="mb-0">
            Contributed to the development of full-stack web applications using 
            Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. 
            Implemented REST APIs, integrated databases, and built responsive 
            user interfaces. Strengthened practical skills in backend logic, 
            frontend design, and scalable application development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Internship;
