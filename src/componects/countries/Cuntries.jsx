import { use } from "react";
import Countri from "./Countri/Countri";
const Cuntries = ({ coutriesPromise }) => {
  const countriesDeata = use(coutriesPromise);
  const countries = countriesDeata.countries;
  //   console.log(countriesDeata);
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      {countries.map((countrie) => (
        <Countri key={countrie.cca3.cca3} countrie={countrie}></Countri>
      ))}
    </div>
  );
};

export default Cuntries;
