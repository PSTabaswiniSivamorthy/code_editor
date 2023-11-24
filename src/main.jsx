import { render } from "preact";
import { StrictMode } from "preact/compat";
import App from "./App";
import "./index.css";
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
render(app, root);
