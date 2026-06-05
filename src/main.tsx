import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
