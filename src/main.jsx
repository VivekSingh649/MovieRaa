import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import MovieProvider from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <Router>
      <App />
    </Router>
  </MovieProvider>
);
