import React from "react";

function Footer() {
  return (
    <>
      <div class="footer-section container-fluid">
        <h1 class="text-dark text-center">
          <div class="text-center">
            <h2 class="brand-name">
              Travel <span id="brand-second-name">Bug</span>
            </h2>
          </div>
        </h1>
        <p class="text-center"> Embark on Endless Adventures with Travel Bug</p>
        <div class="social-icons">
          <div class="social-icon">
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </div>
          <div class="social-icon">
            <i class="fa-brands fa-whatsapp fa-2xl"></i>
          </div>
          <div class="social-icon">
            <i class="fa-brands fa-twitter fa-2xl"></i>
          </div>
        </div>
        <p class="copyright-text">
          Copyright &copy; 2023 Travel Bug | All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
