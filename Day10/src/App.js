import React from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// export const App = () => <h1>Welcome to 30 Days of React</h1>;

//---------------------------------or export in a funciton declaration
// export function App() {
//   return <h1>Welcome to 30 Days of React</h1>;
// }

//-----default export
class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  showDate = (time) => {
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
    return `${month} ${date}, ${year}`;
  };
  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };
    // const techs = ["HTML", "CSS", "JavaScript"];

    return (
      <div className="app">
        <Header data={data} />
        <Footer date={new Date()} />
      </div>
    );
  }
}
export default App;
