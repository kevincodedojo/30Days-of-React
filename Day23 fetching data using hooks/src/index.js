import React from "react";
import ReactDOM from "react-dom";

//----------------------------------------------fetching data using hooks
import { useState, useEffect } from "react";
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

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <h1>React Component Life Cycle</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className="countries-wrapper">
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
