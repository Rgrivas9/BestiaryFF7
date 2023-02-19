import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { _3dContextProvider } from "./context/_3dContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <_3dContextProvider>
        <App />
      </_3dContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
