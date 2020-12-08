import React from "react";
import Films from "./pages/Films";
import axios from "axios";

/*
#222831
#30475e
#f2a365
#ececec
*/

axios.defaults.baseURL = "https://ghibliapi.herokuapp.com";
// axios.defaults.baseURL =
//   "https://cors-anywhere.herokuapp.com/https://ghibliapi.herokuapp.com";

function App() {
  return (
    <div className="App">
      <Films />
    </div>
  );
}

export default App;
