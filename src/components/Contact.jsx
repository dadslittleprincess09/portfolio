import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-4 contact-section text-white text-center"
    >
      <div className="container ">
        <h3 className="fw-bold mb-4">Contact Me</h3>
        <p>
          <FaEnvelope className="me-2 text-info" />
          <a
            href="mailto:pavanikimidi73@gmail.com"
            className="text-white text-decoration-none"
          >
            pavanikimidi73@gmail.com
          </a>
        </p>

        <p>
          <FaPhone className="me-2 text-info" />
          <a
            href="tel:+918688887172"
            className="text-white text-decoration-none"
          >
            +91 8688887172
          </a>
        </p>

        <p>
          <FaLinkedin className="me-2 text-info" />
          <a
            href="https://linkedin.com/in/pavani-kimidi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-decoration-none"
          >
            linkedin.com/in/pavani-kimidi
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
