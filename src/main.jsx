import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// styles
import "./index.css";
import "modern-normalize";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
