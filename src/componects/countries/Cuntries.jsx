import { use, useState } from "react";
import Countri from "./Countri/Countri";
import "./Countries.css";
const Cuntries = ({ coutriesPromise }) => {
  const countriesDeata = use(coutriesPromise);
  const countries = countriesDeata.countries;
  const [visitedCountries, setVisitedcountries] = useState([]);

  const handleVisistedCoutries = (countrie) => {
    const newVisitedCountries = [...visitedCountries, countrie];
    console.log(newVisitedCountries);
    setVisitedcountries(newVisitedCountries);
  };
  //   console.log(countriesDeata);
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <h3>Total Countries Visited: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((countrie) => (
          <li key={countrie.cca3.cca3}>{countrie.name.common}</li>
        ))}
      </ol>
      <div className="card">
        {countries.map((countrie) => (
          <Countri
            handleVisistedCoutries={handleVisistedCoutries}
            key={countrie.cca3.cca3}
            countrie={countrie}
          ></Countri>
        ))}
      </div>
    </div>
  );
};

export default Cuntries;
