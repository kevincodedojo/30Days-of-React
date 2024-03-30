import React from "react";
import ReactDOM from "react-dom";

//--------------------------------- mouse and keyboard events

class App extends React.Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };
  handleClick = (e) => {
    console.log(e);
    this.setState({
      message: "Welcome to the World of Events",
    });
  };

  handleMouseMove = (e) => {
    this.setState({
      message: "Mouse is moving",
    });
  };

  handleCopy = (e) => {
    this.setState({
      message: "Do not copy text from here",
    });
  };

  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.keyCode,
    });
  };

  handleBlur = (e) => {
    this.setState({
      message: "Input field is blurred",
    });
  };

  handleChange = (e) => {
    this.setState({
      // firstName: e.target.value,
      message: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>

        <label>Test for onKeyPress Event:</label>
        <input type="text" onKeyUp={this.handleKeyPress} />
        <br />

        <label htmlFor="blurInput">Test for onBlur Event:</label>
        <input type="text" id="blurInput" onBlur={this.handleBlur} />

        <form>
          <div>
            <label>FirstName</label>d
            <input
              onChange={this.handleChange}
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
