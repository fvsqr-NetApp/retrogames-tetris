import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

console.log('MONEYMAKER_UPDATE_DELAY', process.env.REACT_APP_MONEYMAKER_UPDATE_DELAY);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
