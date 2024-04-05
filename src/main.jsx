import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Style css
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontWeight: "bold",
            fontFamily: "sans-serif",
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
