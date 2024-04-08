import React from "react";
import ReactDOM from "react-dom";

//----------------------------------------------Fetch

// const Country = ({
//   country: { name, capital, flag, languages, population, currency },
// }) => {
//   const formatedCapital =
//     capital.length > 0 ? (
//       <>
//         <span>Capital: </span>
//         {capital}
//       </>
//     ) : (
//       ""
//     );

//   const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
//   console.log(languages);
//   return (
//     <div className="country">
//       <div className="country_flag">
//         <img src={flag} alt={name} />
//       </div>
//       <h3 className="country_name">{name.toUpperCase()}</h3>
//       <div class="country_text">
//         <p>{formatedCapital}</p>
//         <p>
//           <span>{formatLanguage}: </span>
//           {languages.map((language) => language.name).join(", ")}
//         </p>
//         <p>
//           <span>Population: </span>
//           {population.toLocaleString()}
//         </p>
//         <p>
//           <span>Currency: </span>
//           {currency}
//         </p>
//       </div>
//     </div>
//   );
// };

// class App extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     const url = "https://restcountries.eu/rest/v2/all";
//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>React Component Life Cycle</h1>
//         <h1>Calling API</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className="countries-wrapper">
//             {this.state.data.map((country) => (
//               <Country country={country} />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------------------implement async await
// const Country = ({
//   country: { name, capital, flags, languages, population, currencies },
// }) => {
//   const formatedCapital = capital ? (
//     <>
//       <span>Capital: </span>
//       {capital}
//     </>
//   ) : (
//     ""
//   );
//   const languageList = languages
//     ? Object.values(languages).join(", ")
//     : "No data";
//   const formatLanguage =
//     languages && Object.keys(languages).length > 1 ? `Languages` : `Language`;

//   const currencyCode = currencies ? Object.keys(currencies)[0] : "No data";
//   const currencyName = currencies ? currencies[currencyCode].name : "No data";
//   const currencySymbol = currencies
//     ? currencies[currencyCode].symbol
//     : "No data";

//   return (
//     <div className="country">
//       <div className="country_flag">
//         <img src={flags.png} alt={`Flag of ${name}`} />
//       </div>
//       <h3 className="country_name">{name.common.toUpperCase()}</h3>
//       <div class="country_text">
//         <p>{formatedCapital}</p>
//         <p>{capital}</p>
//         <p>
//           <span>{formatLanguage}: </span>
//           {languageList}
//         </p>
//         <p>
//           <span>Population: </span>
//           {population.toLocaleString()}
//         </p>
//         <p>
//           <span>Currency: </span>
//           {currencyName} ({currencyCode}), Symbol {currencySymbol}
//         </p>
//       </div>
//     </div>
//   );
// };

// class App extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     this.fetchCountryData();
//   }

//   fetchCountryData = async () => {
//     const url = "https://restcountries.com/v3.1/all";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({
//       data,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>React Component Life Cycle</h1>
//         <h1>Calling API</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className="countries-wrapper">
//             {this.state.data.map((country) => (
//               <Country country={country} />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//----------------------------------------------axios

import axios from "axios";
const Country = ({
  country: { name, capital, flags, languages, population, currencies },
}) => {
  const formatedCapital = capital ? (
    <>
      <span>Capital: </span>
      {capital}
    </>
  ) : (
    ""
  );
  const languageList = languages
    ? Object.values(languages).join(", ")
    : "No data";
  const formatLanguage =
    languages && Object.keys(languages).length > 1 ? `Languages` : `Language`;

  const currencyCode = currencies ? Object.keys(currencies)[0] : "No data";
  const currencyName = currencies ? currencies[currencyCode].name : "No data";
  const currencySymbol = currencies
    ? currencies[currencyCode].symbol
    : "No data";

  return (
    <div className="country">
      <div className="country_flag">
        <img src={flags.png} alt={`Flag of ${name}`} />
      </div>
      <h3 className="country_name">{name.common.toUpperCase()}</h3>
      <div class="country_text">
        <p>{formatedCapital}</p>
        <p>{capital}</p>
        <p>
          <span>{formatLanguage}: </span>
          {languageList}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currencyName} ({currencyCode}), Symbol {currencySymbol}
        </p>
      </div>
    </div>
  );
};

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const url = "https://restcountries.com/v3.1/all";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className="countries-wrapper">
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
