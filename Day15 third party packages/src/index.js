import React from "react";
import ReactDOM from "react-dom";

//------------------------- component life cycles
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("I am the constructor and I will be called first");
    this.state = {
      day: 1,
      congratulate: "",
    };
  }

  shouldComponenttUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(nextState.day);
    if (nextState.day > 31) {
      return false;
    } else {
      return true;
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.day === 30) {
      this.setState({
        congratulate: "Congratulations on completing the challenge",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>React Coponent Life Cycle</h1>
        <h1>Colling API</h1>
        <button onClick={this.doChallenge}>Do Challeng</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
