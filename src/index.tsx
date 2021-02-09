import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./components/App";
import "./index.css";

firebase.initializeApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);
