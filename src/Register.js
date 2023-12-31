import React, { useState } from "react";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhone,
} from "./Validation";

const Register = ({ divStyle2, onButtonClick4, onButtonClick6 }) => {
  const [style, setStyle] = useState({
    border: "",
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    //Perform email validation
    if (isValidEmail(newEmail)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    //Perform password validation
    if (isValidPassword(newPassword)) {
      setPasswordError("");
      setStyle({ border: "1.5px solid green" });
    } else {
      setPasswordError("Invalid Password");
      setStyle({ border: "1.5px solid red" });
    }
  };

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);

    //Perform Phone validation
    if (isValidPhone(newPhone)) {
      setPhoneError("");
    } else {
      setPhoneError("Invalid Phone number");
    }
  };

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleNameChange = (event) => {
    const newPhone = event.target.value;
    setName(newPhone);

    //Perform Name validation
    if (isValidName(newPhone)) {
      setNameError("");
    } else {
      setNameError("Invalid Name");
    }
  };

  return (
    <>
      <div id="id02" class="modal" style={divStyle2}>
        <form
          class="modal-content animate"
          action="/action_page.php"
          method="post"
        >
          <div class="imgcontainer">
            <h4>Register</h4>
            <span onClick={onButtonClick4} class="close" title="Close Modal">
              &times;
            </span>
          </div>

          <div class="container register-section">
            <div class="row">
              <div class="col-md-6">
                <label for="fullname">
                  <b>Full Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  name="fullname"
                  id="reg_name"
                  class="register-field"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                <p class="error_msg">{nameError}</p>
                <label for="contact">
                  <b>Contact</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter contact number"
                  name="contact"
                  id="reg_contact"
                  class="register-field"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
                <p class="error_msg">{phoneError}</p>
                <label for="dob">
                  <b>DOB</b>
                </label>
                <input
                  type="date"
                  placeholder="Enter DOB"
                  name="dob"
                  id="reg_dob"
                  class="register-field"
                  required
                />
                <label for="gender">
                  <b>Gender</b>
                </label>
                <input type="radio" id="male" name="gender" value="Male" />
                <label
                  for="male"
                  style={{ display: "inline-block", fontWeight: "normal" }}
                >
                  Male
                </label>
                <input type="radio" id="female" name="gender" value="Female" />
                <label
                  for="female"
                  style={{ display: "inline-block", fontWeight: "normal" }}
                >
                  Female
                </label>
                <input type="radio" id="other" name="gender" value="other" />
                <label
                  for="other"
                  style={{ display: "inline-block", fontWeight: "normal" }}
                >
                  Other
                </label>
                <label for="email">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  name="email"
                  id="reg_email"
                  class="register-field email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <p class="error_msg">{emailError}</p>
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="reg_password"
                  class="register-field password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={style}
                  required
                />{" "}
                <i
                  class="fa-solid fa-circle-info fa-lg"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Password must contain 8 to 15 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
                ></i>
                <p class="error_msg">{passwordError}</p>
                <button type="submit" class="register-button">
                  Register
                </button>
                <label class="login-link">
                  Already have an account?{" "}
                  <span onClick={onButtonClick6}>Sign in</span>
                </label>
                <button
                  type="button"
                  onClick={onButtonClick4}
                  class="cancelbtn"
                >
                  Cancel
                </button>
              </div>
              <div class="col-md-6">
                <img
                  src="images/register.svg"
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
