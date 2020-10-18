import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import RoomContextProvider from "./Context";

ReactDOM.render(
  <RoomContextProvider>
    <Router>
      <App />
    </Router>
  </RoomContextProvider>,
  document.getElementById("root")
);
