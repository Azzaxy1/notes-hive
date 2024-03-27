import React from "react";
import ReactDOM from "react-dom/client";
import NotesApp from "./components/NotesApp";

// Style css
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
);

