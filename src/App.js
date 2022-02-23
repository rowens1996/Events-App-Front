import React from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import { useState } from "react";
import Login from "./Login";

function App() {
  const [token, changeToken] = useState("");
  const logout = () => {
    changeToken("");
  };

  const loggedIn = (newToken) => {
    changeToken(newToken);
  };

  const client = new ApiClient(token, logout);

  return (
    <>
      {token ? (
        <Dashboard client={client} />
      ) : (
        <Login client={client} loggedIn={loggedIn} />
      )}
    </>
  );
}

export default App;
