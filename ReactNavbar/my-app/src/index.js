import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const AppWithRouter = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(<AppWithRouter />, document.getElementById("root"));
