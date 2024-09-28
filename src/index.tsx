import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/fonts.css";

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
