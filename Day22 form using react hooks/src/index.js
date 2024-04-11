import React from "react";
import ReactDOM from "react-dom";

//----------------------------------------------input field

// const App = () => {
//   const [firstName, setFirstName] = React.useState("");
//   const handleChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   return (
//     <div>
//       <label>First Name: </label>
//       <input
//         type="text"
//         placeholder="First Name"
//         id="firstName"
//         name="firstName"
//         value={firstName}
//         onChange={handleChange}
//       />
//       <h2>{firstName}</h2>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------------------multiple input field

import { useState } from "react";

const App = () => {
  const initialStates = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialStates);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialStates);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>
        {formData.firstName} {formData.lastName}
      </h2>
      <h3>{formData.email}</h3>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
