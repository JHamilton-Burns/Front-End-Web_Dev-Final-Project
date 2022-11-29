import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

class Index extends PureComponent {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);