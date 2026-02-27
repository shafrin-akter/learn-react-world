import { useState } from "react";
import "./countri.css";
const Countri = ({ countrie, count, setCount }) => {
  console.log(countrie);
  const { name, flags, capital, continents, languages } = countrie;
  const [visited, setVisited] = useState(false);

  // Visited Button
  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // setVisited(visited ? false : true);

    setVisited(!visited);
    if (!count) {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className={`countri  ${visited && "countri-visited"}`}>
      <img src={flags?.flags?.png} alt={flags?.flags?.alt} />
      <h3>Name: {name.common}</h3>
      <h3>Capital: {capital.capital}</h3>
      {languages?.languages?.eng && <p>Language: {languages.languages.eng}</p>}
      <p>Continents: {continents.continents}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Countri;
