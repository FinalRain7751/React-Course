import "core-js/stable";
import "regenerator-runtime/runtime";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

if (module.hot) {
  module.hot.accept();
}
