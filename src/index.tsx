import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./vendors/normalize.css";
import "./main.sass";
import ThemeProvider from "./Theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
