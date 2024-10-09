import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// styles
import "./index.css";
import "modern-normalize";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
