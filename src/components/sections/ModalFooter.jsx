// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ModalFooter from "../../modalFooter";
import "@/index.css";

const el = document.getElementById("privacyModalRoot");
if (el) {
  ReactDOM.createRoot(el).render(<ModalFooter />);
}
