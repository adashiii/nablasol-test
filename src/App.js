import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { validateEmail } from "./utils";
import usePasswordValidator from "./usePasswordValidator";

import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [password, setPassword, passwordError] = usePasswordValidator({
    min: 8,
    max: 15,
  });
  useEffect(() => {
    if (!email) {
      setEmailError("");
    } else {
      if (validateEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Please enter a valid email.");
      }
    }
    
  }, [email]);

  useEffect(() => {
    if (!confirmPassword || !password) {
      setConfirmPasswordError("");
    } else {
      if (password !== confirmPassword) {
        setConfirmPasswordError("The passwords must match.");
      } else {
        setConfirmPasswordError("");
      }
    }
  }, [password, confirmPassword]);

  console.log(
    
    fName,
    lName,
    email,
    emailError,
    phoneNumber,
    confirmPassword,
    confirmPasswordError
  );

  

  return (
    <div>
      <form>
        <h3>Please sign up</h3>
        <input
          value={fName}
          onChange={(e) => setfName(e.target.value)}
          type="text"
          placeholder="Input Your first name"
        />
        <input
          value={lName}
          onChange={(e) => setlName(e.target.value)}
          type="text"
          placeholder="Input Your last name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <div className="error">{emailError}</div>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="Input Your Phone Number"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <div className="error">{passwordError}</div>

        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <div className="error">{confirmPasswordError}</div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
