import React from "react";
const Navbar = ({ onButtonClick1, onButtonClick2 }) => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg">
        <a class="navbar-brand" href="index.html">
          <img src="images/logo.png" alt="noimage" />
        </a>

        <h2 class="brand-name">
          Travel <span id="brand-second-name">Bug</span>
        </h2>

        <button
          class="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#booking">
                Book
              </a>
            </li>

            <li class="nav-item">
              <div class="dropdown">
                <button class="dropbtn">
                  Packages
                  <i class="fa fa-caret-down" style={{ marginLeft: "5px" }}></i>
                </button>
                <div class="dropdown-content rounded-bottom">
                  <a href="#">United states</a>
                  <a href="#">India</a>
                  <a href="#">France</a>
                  <a href="#">Germany</a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#gallery">
                Gallery
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>

          <div class="navbar-buttons">
            <button
              type="button"
              class="btn btn-light btn-md login"
              onClick={onButtonClick1}
              style={{ width: "auto", marginRight: "5px" }}
            >
              login
            </button>
            <button
              type="button"
              class="btn btn-light btn-md register"
              onClick={onButtonClick2}
            >
              register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
