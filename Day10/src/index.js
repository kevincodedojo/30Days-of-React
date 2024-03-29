// The index.js is your getaway to connect the component with index.html.

import React from "react";
import ReactDOM from "react-dom";

// import { App } from "./App";

// If a component is exported as default we do not need curly bracket during importing.
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
