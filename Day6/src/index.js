import React from "react";
import ReactDOM from "react-dom";

//--------------------------------- arrays
// const App = () => {
//   return (
//     <div className="container">
//       <h1>Numbers List</h1>
//       {[1, 2, 3, 4, 5]}
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------------------- Mapping arrays

// const Numbers = ({ numbers }) => {
//   const list = numbers.map((number) => <li>{number}</li>);
//   return list;
// };

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];
//   return (
//     <div className="container">
//       <h1>Numbers List</h1>
//       <ul>
//         <Numbers numbers={numbers} />
//       </ul>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------------------- Mapping array of arrays
// const skills = [
//   ["HTML", 10],
//   ["CSS", 8],
//   ["JavaScript", 9],
//   ["React", 7],
//   ["Node", 6],
// ];

// const Skill = ({ skill: [tech, level] }) => (
//   <li>
//     {tech} {level}
//   </li>
// );

// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill} />);
//   return <ul>{skillsList}</ul>;
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Skills Level</h1>
//       <Skills skills={skills} />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------------------- Mapping array of objects
// const countries = [
//   { name: "Egypt", capital: "Cairo" },
//   { name: "Germany", capital: "Berlin" },
//   { name: "Italy", capital: "Rome" },
//   { name: "France", capital: "Paris" },
//   { name: "USA", capital: "Washington" },
// ];

// const Country = ({ country: { name, capital } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{capital}</small>
//     </div>
//   );
// };

// const Countries = ({ countries }) => {
//   const countriesList = countries.map((country) => (
//     <Country country={country} />
//   ));
//   return <ul>{countriesList}</ul>;
// };
//--------or------
// const Countries = ({ countries }) => {
//   const countriesList = countries.map((country) => (
//     <div>
//       <h1>{country.name}</h1>
//       <small>{country.capital}</small>
//     </div>
//   ));
//   return <div>{countriesList}</div>;
// };
//--------------

// const App = () => (
//   <div className="container">
//     <div>
//       <h1>Countries List</h1>
//       <Countries countries={countries} />
//     </div>
//   </div> // Remove the semicolon here
// );

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------------------- Mapping array of objects with keys

// const Numbers = ({ numbers }) => {
//   const list = numbers.map((num) => <li key={num}>{num}</li>);
//   return list;
// };

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       <div>
//         <h1>Numbers List with keys</h1>
//         <ul>
//           <Numbers numbers={numbers} />
//         </ul>
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------------------- Mapping array of objects with keys

const countries = [
  { name: "Egypt", capital: "Cairo" },
  { name: "Germany", capital: "Berlin" },
  { name: "Italy", capital: "Rome" },
  { name: "France", capital: "Paris" },
  { name: "USA", capital: "Washington" },
];

const Country = ({ country: { name, capital } }) => (
  <div>
    <h1>{name}</h1>
    <small>{capital}</small>
  </div>
);

const Countries = ({ countries }) => {
  const countriesList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ));
  return <div>{countriesList}</div>;
};

const App = () => (
  <div className="container">
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
