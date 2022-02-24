import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Button,
  Container,
} from "react-bootstrap";


function Login(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    // console.log("submit");

    e.preventDefault();
    cDisabled(true);
    props.client
      .login(e.target.username.value, e.target.password.value)
      .then((response) => {
        cDisabled(false);
        props.loggedIn(response.data.token);
      })
      .catch((err) => {
        alert("an error has occurred");
        console.log(err);
        cDisabled(false);
      });
  };

  return (
    <div className="login-child">
      <span className="login-header">Hello</span>
      <hr/>
      <form onSubmit={(e) => submitHandler(e)}>
        username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <Button variant="outline-success" type="submit" disabled={disabled}>
          {" "}
          Login{" "}
        </Button>
&nbsp;&nbsp;&nbsp;
        <Button variant="outline-primary" type="" disabled={disabled}>
          {" "}
          Sign Up{" "}
        </Button>

      </form>
    </div>
  );
}

export default Login;
