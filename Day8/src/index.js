import React from "react";
import ReactDOM from "react-dom";

//--------------------------------- set a state
// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   render() {
//     const count = this.state.count;
//     return (
//       <div className="app">
//         <h1>{count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Add One
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           Minus One
//         </button>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------restructure the cosde

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   //method to increase the count
//   addOne = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   minusOne = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     const count = this.state.count;
//     return (
//       <div className="app">
//         <h1>{count}</h1>
//         <button className="btn btn-add" onClick={this.addOne}>
//           +1
//         </button>{" "}
//         <button className="btn btn-minus" onClick={this.minusOne}>
//           -1
//         </button>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------application of dog and cat
class App extends React.Component {
  state = {
    image:
      "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
  };
  changeAnimal = () => {
    let dogUrl =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catUrl =
      "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg";
    this.setState({ image: this.state.image === catUrl ? dogUrl : catUrl });
  };

  render() {
    return (
      <div className="app">
        <h1>30 Days of React</h1>
        <div className="animal-image">
          <img src={this.state.image} alt="animal" />
        </div>
        <button onClick={this.changeAnimal}>Change Animal</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
