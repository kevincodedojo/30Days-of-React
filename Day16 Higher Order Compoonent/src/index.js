import React from "react";
import ReactDOM from "react-dom";

//------------------------- higher order component
// const Button = ({ onClick, text, style }) => {
//   return (
//     <button onClick={onClick} style={style}>
//       {text}
//     </button>
//   );
// };

// const buttonWithStyle = (CompParam) => {
//   const buttonStyles = {
//     backgroundColor: "#61dbfb",
//     padding: "10px 25px",
//     border: "none",
//     borderRadius: 5,
//     margin: 3,
//     cursor: "pointer",
//     fontSize: 18,
//     color: "white",
//   };
//   return (props) => {
//     return <CompParam {...props} style={buttonStyles} />;
//   };
// };

// const NewButton = buttonWithStyle(Button);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button text="No Style" />
//         <NewButton text="Styled Button" />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//------------------------- higher order component with props

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyles = (CompParam, name = "default") => {
  const colors = [
    {
      name: "default",
      backgroundColor: "#e7e7e7",
      color: "#000000",
    },
    {
      name: "react",
      backgroundColor: "#61dbfb",
      color: "#ffffff",
    },
    {
      name: "success",
      backgroundColor: "#4CAF50",
      color: "#ffffff",
    },
    {
      name: "info",
      backgroundColor: "#2196F3",
      color: "#ffffff",
    },
    {
      name: "warning",
      backgroundColor: "#ff9800",
      color: "#ffffff",
    },
    {
      name: "danger",
      backgroundColor: "#f44336",
      color: "#ffffff",
    },
  ];

  const { backgroundColor, color } = colors.find((c) => c.name === name);

  const buttonStyles = {
    backgroundColor,
    padding: "10px 45px",
    border: "none",
    borderRadius: 3,
    margin: 3,
    cursor: "pointer",
    fontSize: "1.25rem",
    color,
  };

  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);
const ReactButton = buttonWithStyles(Button, "react");
const InfoButton = buttonWithStyles(Button, "info");
const SuccessButton = buttonWithStyles(Button, "success");
const WarningButton = buttonWithStyles(Button, "warning");
const DangerButton = buttonWithStyles(Button, "danger");

class App extends React.Component {
  render() {
    return (
      <div>
        <Button text="No Style" onClick={() => alert("I am not styled yet")} />

        <NewButton
          text="Styled Button"
          onClick={() => alert("I am the default style")}
        />
        <ReactButton text="React" onClick={() => alert("I have react color")} />
        <InfoButton
          text="Info"
          onClick={() => alert("I am styled with info color")}
        />
        <SuccessButton
          text="Success"
          onClick={() => alert("I am successful")}
        />
        <WarningButton
          text="Warning"
          onClick={() => alert("I warn you many times")}
        />
        <DangerButton
          text="Danger"
          onClick={() => alert("Oh no, you can not restore it")}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
