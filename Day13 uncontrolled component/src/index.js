import React from "react";
import ReactDOM from "react-dom";

//--------------------------------- getting data from an uncontrolled input
// class App extends React.Component {
//   firstName = React.createRef();

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.firstName.current.value);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="firstName">First Name: </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             placeholder="firstName"
//             ref={this.firstName}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//---------------------------------getting multiple input data from form
class App extends React.Component {
  firstName = React.createRef();
  lastName = React.createRef();
  country = React.createRef();
  title = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.country.current.value);
    console.log(this.title.current.value);
    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      country: this.country.current.value,
      title: this.title.current.value,
    };
    console.log(data);
  };

  render() {
    return (
      <div>
        <h3>Add Studnet</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="firstName"
              ref={this.firstName}
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="lastName"
              ref={this.lastName}
            />
          </div>
          <div>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="country"
              ref={this.country}
            />
          </div>
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              ref={this.title}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
