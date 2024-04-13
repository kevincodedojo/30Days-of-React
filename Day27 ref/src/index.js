import React from "react";
import ReactDOM from "react-dom";

//----------------------------------------------Getting data from input
// import { useRef } from "react";

// const App = (props) => {
//   const ref = useRef(null);
//   const onClick = () => {
//     let value = ref.current.value;
//     alert(value);
//   };
//   return (
//     <div>
//       <h1>use data from uncontrlled input using resRef</h1>
//       <input type="text" ref={ref} />
//       <button onClick={onClick}>Alert the value</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------------------Focus

// import { useRef } from "react";

// const App = (props) => {
//   const ref = useRef(null)
//   const onClick = () => {
//     ref.current.focus()
//   }
//   return (
//     <div className='App'>
//       <h1>How to focus on input element useRef</h1>
//       <input type='text' ref={ref} />
//       <br />
//       <button onClick={onClick}>Click to Focus on input</button>
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

//----------------------------------------------Getting Content from DOM tree

// import { useRef } from "react";

// const App = (props) => {
//   const ref = useRef(null);
//   const onClick = () => {
//     let content = ref.current.textContent;
//     alert(content);
//     console.log(content);
//   };
//   return (
//     <div>
//       <h1 ref={ref}>How to focus on input element useRef</h1>
//       <button onClick={onClick}>Getting Content</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------------------Getting Content from DOM tree

import { useRef } from "react";

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.style.color = "red";
    ref.current.style.fontSize = "40px";
    ref.current.style.backgroundColor = "black";
    ref.current.style.padding = "10px";
    ref.current.style.textAlign = "center";
  };
  return (
    <div>
      <h1 ref={ref}>style HTML from the DOM tree using useRef</h1>
      <button onClick={onClick}>style the content</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
