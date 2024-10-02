import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./index.css";
// jadikan sebagai tempat installation dan juga configurasi
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
