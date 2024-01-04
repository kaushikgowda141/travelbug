import React from "react";

function Gallery() {
  return (
    <>
      <p id="gallery"></p>

      <div class="container">
        <h1 class="text-center">Gallery</h1>

        <div class="row third-section">
          <div class="col-md-4">
            <div class="card">
              <img src="images/g9.jpg" alt="noimage" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="images/g2.jpg" alt="noimage" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="images/g10.jpg" alt="noimage" />
            </div>
          </div>
        </div>

        <div class="row third-section">
          <div class="col-md-4">
            <div class="card">
              <img src="images/g11.jpg" alt="noimage" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="images/g5.jpg" alt="noimage" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="images/g6.jpg" alt="noimage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
