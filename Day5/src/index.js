import React from "react";
import ReactDOM from "react-dom";

//--------------------String props type

// const Header = (props) => {
//   console.log(props);
//   return (
//     <header className="header-wrapper">
//       <div>
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstName} {props.lastName}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   const welcome = "Welcome to React";
//   const title = "Geting Started with React";
//   const subtitle = "JavaScript Library";
//   const firstName = "John";
//   const lastName = "Doe";
//   const date = new Date().toDateString();

//   return (
//     <div>
//       <Header
//         welcome={welcome}
//         title={title}
//         subtitle={subtitle}
//         firstName={firstName}
//         lastName={lastName}
//         date={date}
//       />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------Number props type
// const Age = (props) => <div>The person is {props.age} years old.</div>;
// const Weight = (props) => (
//   <p>The weitht of the objects on esrth is {props.weight} N.</p>
// );

// const App = () => {
//   let currentYear = new Date().getFullYear();
//   let birthYear = 1820;
//   const age = currentYear - birthYear;
//   const gravity = 9.8;
//   const mass = 70;
//   return (
//     <div>
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------Boolean props type
// const Status = (props) => {
//   let status = props.status ? "Old enough to drive" : "Too young to drive";
//   return <p>{status}</p>;
// };

// const App = () => {
//   let currentYear = new Date().getFullYear();
//   let birthYear = 2005;
//   const age = currentYear - birthYear;
//   let status = age >= 16;

//   return (
//     <div className="app">
//       <Status status={status} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------Array props type
// const Skills = (props) => {
//   const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>);
//   return <ul>{skillList}</ul>;
// };

// const App = () => (
//   <div>
//     <Skills skills={["HTML", "CSS", "JavaScript"]} />
//   </div>
// );
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------Object props type

// const showDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return `${month} ${date}, ${year}`;
// };

// const Header = (props) => {
//   return (
//     <header className="header-wrapper">
//       <div>
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//         <p>
//           {props.data.author.firstName} {props.data.author.lastName}
//         </p>
//         <small>{showDate(props.data.date)}</small>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   const data = {
//     welcome: "Welcome to React",
//     title: "Geting Started with React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     date: new Date(),
//   };

//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------Function props type

// const Button = (props) => {
//   return <button onClick={props.handleClick}>{props.label}</button>;
// };

// const App = () => {
//   const handleClish = () => {
//     alert("hi");
//   };
//   return (
//     <div className="app">
//       <Button handleClick={handleClish} label="Click me" />

//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//---------------different function props type
// const Button = (props) => (
//   <button onClick={props.handleClick}>{props.label}</button>
// );

// const App = () => {
//   const greetPeole = () => {
//     alert("Welcome to React, 2024");
//   };

//   return (
//     <div className="app">
//       <Button handleClick={greetPeole} label="Greet People" />
//       <Button handleClick={() => alert(new Date())} label="Show Time" />
//       <Button handleClick={() => alert(new Date())} label="Show Time" />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//-------------------------------------------------------------Destructuring props
// const showDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return ` ${month} ${date}, ${year}`;
// };

//-----Destructuring props inside parameter
// const Header = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// })
//--------------------

// const Header = (props) => {
//   const data = props.data;
//   const { welcome, title, subtitle, author, date } = data;
//   const { firstName, lastName } = author;
//   return (
//     <header className="header-wrapper">
//       <div>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   const data = {
//     welcome: "Welcome to React",
//     title: "Getting Started with React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     date: new Date(),
//   };
//   return (
//     <div className="app">
//       <Header data={data} />
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//-------------------------------------------------------------final props example
import cssLogo from "./images/css_logo.png";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// Main Component
// const Main = ({ user, techs, greetPeople, handleTime }) => (
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(), // date needs to be formatted to a human readable format
  };

  const date = new Date();
  const techs = ["HTML", "CSS", "JavaScript"];
  // // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: cssLogo };
  // const user = {
  //   firstName: "Asabeneh",
  //   lastName: "Yetayeh",
  //   image: cssLogo,
  // };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main
        techs={techs}
        user={user}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
