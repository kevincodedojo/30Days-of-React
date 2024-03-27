import React from "react";
import ReactDOM from "react-dom";

//--------------------------------- class based React Component

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="header-wrapper">
//         <h1>Welcom to 30 Days of React</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScrips Library</h3>
//         <p>Sam chris</p>
//         <samll>Jan 1, 2024</samll>
//       </header>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Header />, rootElement);

//--------------------------------- class based React Component together with props
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <header className="header-wrapper">
//         <div className="header-wrapper">
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     );
//   }
// }

// // TechList Component
// // class base component
// class TechList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const techs = ["HTML", "CSS", "JavaScript"];
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
//     return techsFormatted;
//   }
// }

// // Main Component
// // Class Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <main>
//         <div className="main-wrapper">
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList />
//           </ul>
//         </div>
//       </main>
//     );
//   }
// }

// // Footer Component
// // Class component
// class Footer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <footer>
//         <div className="footer-wrapper">
//           <p>Copyright 2020</p>
//         </div>
//       </footer>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="app">
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//--------------------------------- class based React Component together with props
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data);
    const {
      welcom,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    return (
      <header className="header-wrapper">
        <div className="hwrapper">
          <h1>{welcom}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <h3>
            {firstName} {lastName}
          </h3>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const App = () => {
  const data = {
    welcom: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Box",
      lastName: "Man",
    },
    date: "Mar 27, 2024",
  };
  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
