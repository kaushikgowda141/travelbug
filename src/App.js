import { useState } from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Booking from "./Booking";
import Footer from "./Footer";
import Gallery from "./Gallery";
import LogIn from "./LogIn";
import Navbar from "./Navbar";
import Package from "./Package";
import Services from "./Services";
import Register from "./Register";
import "./style.css";

function App() {
  const [divStyle, setDivStyle] = useState({
    display: "none",
  });

  const [divStyle2, setDivStyle2] = useState({
    display: "none",
  });

  const handleButtonClick1 = () => {
    setDivStyle({
      display: "block",
    });
    setDivStyle2({
      display: "none",
    });
  };

  const handleButtonClick2 = () => {
    setDivStyle2({
      display: "block",
    });
    setDivStyle({
      display: "none",
    });
  };

  const handleButtonClick3 = () => {
    setDivStyle({
      display: "none",
    });
    setDivStyle2({
      display: "none",
    });
  };

  return (
    <div>
      <Navbar
        onButtonClick1={handleButtonClick1}
        onButtonClick2={handleButtonClick2}
      />
      <Banner />
      <Booking />
      <Package />
      <Services />
      <Gallery />
      <AboutUs />
      <Footer />
      <LogIn
        divStyle={divStyle}
        onButtonClick3={handleButtonClick3}
        onButtonClick5={handleButtonClick2}
      />
      <Register
        divStyle2={divStyle2}
        onButtonClick4={handleButtonClick3}
        onButtonClick6={handleButtonClick1}
      />
    </div>
  );
}

export default App;
