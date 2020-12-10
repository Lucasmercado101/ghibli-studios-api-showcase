import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#ececec",
  secondary: "#30475e",
  secondaryDark: "#222831",
  accent: "#f2a365",
  accentDark: "#a9865c"
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
