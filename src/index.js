import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShellContextProvider } from "./context/ShellContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShellContextProvider>
    <App />
  </ShellContextProvider>
);
