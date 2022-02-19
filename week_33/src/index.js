import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WebFont from "webfontloader";
import { WordsContextProvider } from "./WordsContext";

WebFont.load({
  google: {
    families: ["Montserrat: 400,500,600"],
  },
});

ReactDOM.render(
  <WordsContextProvider>
    <App />
  </WordsContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
