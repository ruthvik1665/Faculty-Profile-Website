import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#80000" }}
      >
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                Faculty Recruitments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                Job Opertunities
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}>
                CBIT Digest
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: "white" }}></a>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Departments
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <Link
                        to="/IT"
                        style={{ color: "black", textDecoration: "None" }}
                      >
                        IT Department
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CSE Department
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="Login"
                  className="nav-link"
                  aria-disabled="true"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="Register"
                  className="nav-link"
                  aria-disabled="true"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link"
                  aria-disabled="true"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  <Link
                    to="/addData"
                    style={{ color: "black", textDecoration: "None" }}
                  >
                    Add Data
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
