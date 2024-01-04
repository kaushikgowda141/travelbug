import React from "react";

function AboutUs() {
  return (
    <>
      <p id="about"></p>

      <div class="container-fluid" style={{ backgroundColor: "white" }}>
        <h1 class="text-center">About us</h1>

        <div class="row fourth-section">
          <div class="col-md-6 logo-section">
            <img src="images/aboutus.svg" alt="noimage" class="logo" />
          </div>

          <div class="col-md-6 about-us-section">
            <h5>Welcome to Travel Bug - Your Gateway to Global Adventures</h5>
            <p>
              Embark on a journey of boundless exploration with Travel Bug,
              where every step you take is a leap into a world of enchanting
              destinations and unforgettable experiences. We are not just a
              travel and tourism website; we are your passport to a realm of
              discovery, excitement, and cultural immersion.
            </p>
            <h5>Our Essence</h5>
            <p>
              At Travel Bug, we understand that the magic of travel lies in the
              details. We're not just a platform; we're curators of dreams,
              architects of escapades, and storytellers of your unique odyssey.
              Our mission is to infuse every trip with a sense of wonder,
              creating memories that linger long after the voyage ends.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
