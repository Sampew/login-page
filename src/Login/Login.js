import React, { useState } from "react";
import "./Login.css";

function Login() {
  //States for errors and submits
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User database for testing
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  //Error messages
  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    //Destructure form elements
    var { uname, pass } = document.forms[0];

    // Find user from database
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        //Login successful
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Render error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  //Complete login component
  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign in</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <a href="https://www.freepik.com/" class="bottom-right">Background designed by Freepik</a>
    </div>
  );
}

export default Login;
