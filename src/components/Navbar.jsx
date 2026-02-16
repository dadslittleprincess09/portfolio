import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-nav fixed-top">
      <div className="container-fluid px-5">
        <a className="navbar-brand fw-bold fs-5" href="#">
          PAVANI KIMIDI
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto gap-lg-4">
  <li className="nav-item">
    <a className="nav-link" href="#skills">Skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#projects">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#internship">Internship</a>
  </li>
  <li className="nav-item">
    <a className="btn btn-warning px-4" href="#contact">Contact</a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
