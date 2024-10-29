import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount function
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//In dev call mount directly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//for prod just export mount
export { mount };
