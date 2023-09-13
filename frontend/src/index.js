import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import axios from "axios";

import reportWebVitals from "./reportWebVitals";
// Mengatur proxy global
window.axios = axios;

window.axios.defaults.baseURL = "http://localhost:5000";
// Ganti dengan port proxy yang sesuai
//  // auth: {
//     username: "your-username",
//     password: "your-password",

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log(window.axios, "hasil axios :");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
