import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const store = configureStore();

const renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );

if (module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();
