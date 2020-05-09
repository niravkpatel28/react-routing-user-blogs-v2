import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Router from "./router/router";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
