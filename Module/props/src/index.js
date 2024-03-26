import React from "react";
import ReactDOM from "react-dom";

//---------------------------------mapping arrays
const App = () => {
  return (
    <div className="container">
      <h1>Numbers List</h1>
      {[1, 2, 3, 4, 5]}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
