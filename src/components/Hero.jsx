import React from "react";

const Hero = () => {
  return (
    <section 
      className="hero-section text-white py-5" 
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="container px-4" style={{ maxWidth: "800px" }}>
        <div className="text-center">

          <h1 className="fw-bold mb-4" style={{ fontSize: "2.5rem", lineHeight: "1.3" }}> {/* added extra bottom margin */}
            I'm a <span className="text-warning">Java Fullstack Developer</span>
          </h1>

          <p className="mb-1" style={{ fontSize: "1.15rem", color: "#f9f4f4", lineHeight: "1.8" }}> {/* increased line height and bottom margin */}
            I am a passionate full-stack developer with a B.Tech in Computer Science and Engineering and hands-on experience through a Java Full Stack Internship at SocialTek AI & ML Business Solutions. I have developed multiple real-world web applications and projects, gaining expertise in HTML, CSS, JavaScript, React.js, Java, Spring Boot, and MySQL.  
            <br /><br />
          </p>

          

        </div>
      </div>
    </section>
  );
};

export default Hero;
