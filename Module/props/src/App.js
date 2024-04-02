import React from "react";
import ReactDom from "react-dom";
import "./styles/header.css";
import Header from "../src copy/components/header/Header";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}
