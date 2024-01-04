import React, { useState } from "react";
import { isValidEmail, isValidPassword } from "./Validation";
const LogIn = ({ divStyle, onButtonClick3, onButtonClick5 }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [style, setStyle] = useState({
    border: "",
  });

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
  return (
    <>
      <div id="id01" class="modal" style={divStyle}>
        <form
          class="modal-content animate"
          action="#"
          method="post"
          id="reg_form"
        >
          <div class="imgcontainer">
            <h4>Log in</h4>
            <span onClick={onButtonClick3} class="close" title="Close Modal">
              &times;
            </span>
          </div>

          <div class="container login-section">
            <div class="row">
              <div class="col-md-6">
                <label for="email">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  name="email"
                  id="login_email"
                  class="login-field"
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
                  id="login_password"
                  class="login-field"
                  value={password}
                  onChange={handlePasswordChange}
                  style={style}
                  required
                />

                <p class="error_msg">{passwordError}</p>

                <button type="submit" class="login-button">
                  Login
                </button>
                <label class="register-link">
                  Don't have an account?{" "}
                  <span onClick={onButtonClick5}>Sign Up</span>
                </label>
                <br />

                <button
                  type="button"
                  onClick={onButtonClick3}
                  class="cancelbtn"
                >
                  Cancel
                </button>
              </div>
              <div class="col-md-6">
                <img
                  src="images/login.svg"
                  alt="img"
                  style={{ height: "100%" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
