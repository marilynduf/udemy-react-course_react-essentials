import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Header from "./Header.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
