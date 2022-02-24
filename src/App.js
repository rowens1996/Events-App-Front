import React from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import "./App.css";
import {
  Navbar,
  Card,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavLink,
} from "react-bootstrap";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Add from "./Add";

function App() {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken("");
  };

  const loggedIn = (newToken) => {
    window.localStorage.setItem("token", newToken);
    changeToken(newToken);
  };

  const client = new ApiClient(token, logout);

  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="">Events App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav>
                <Link className="nav-link" to="/">
                  Da
                </Link>
                <Link className="nav-link" to="/Add">
                  Add Event
                </Link>
              </Nav>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {token ? (
        <Dashboard client={client} />
      ) : (
        <div className="login-parent">
          <div className="login-form">
            <Login client={client} loggedIn={loggedIn} />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
