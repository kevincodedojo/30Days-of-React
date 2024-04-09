import React from "react";
import ReactDOM from "react-dom";

//----------------------------------------------State Hook

// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add One</button>
//       <button onClick={() => setCount(count - 1)}>Subtract One</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//---------------------------------------------function separate
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const addOne = () => {
//     let value = count + 1;
//     setCount(value);
//   };
//   const subtractOne = () => {
//     let value = count - 1;
//     setCount(value);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={addOne}>Add One</button>
//       <button onClick={subtractOne}>Subtract One</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------------------more about state

import { useState } from "react";

const App = () => {
  const url = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba";

  const [image, setImage] = useState(url);

  const changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba";
    let result = image === catURL ? dogURL : catURL;
    setImage(result);
  };

  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <div className="animal">
        <img
          src={image}
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
          alt="animal"
        />
      </div>

      <button onClick={changeAnimal} class="btn btn-add">
        Change
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
