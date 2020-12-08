import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./vendors/normalize.css";
import "./main.sass";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const theme = {
  primary: "#ececec",
  secondary: "#30475e",
  secondaryDark: "#222831",
  accent: "#f2a365",
  accentDark: "#a9865c",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
