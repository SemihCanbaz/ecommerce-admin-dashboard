import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Named export olarak import
import App from "./App"; // App bileşenini import et
import "./styles/theme.css"; // Örneğin, theme.css dosyanız bu yolda
import "./styles/App.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
