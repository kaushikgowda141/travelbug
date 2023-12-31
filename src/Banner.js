function Banner() {
  return (
    <>
      <div class="home">
        <div class="home-content d-flex justify-content-center align-items-center">
          <div class="content d-flex flex-column justify-content-center align-items-center">
            <h2 class="display-6 fw-bold text-center">Welcome to Travel Bug</h2>
            <h1 class="display-3 fw-bold text-center">
              Visit <span class="country-name"></span>
            </h1>
            <p class="text-center">
              Explore. Dream. Discover. Your journey begins here.
            </p>
            <a href="#booking" class="booking-btn">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
