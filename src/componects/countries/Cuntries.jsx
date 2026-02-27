import { use, useState } from "react";
import Countri from "./Countri/Countri";
import "./Countries.css";
const Cuntries = ({ coutriesPromise }) => {
  const countriesDeata = use(coutriesPromise);
  const countries = countriesDeata.countries;
  const [count, setCount] = useState(0);

  //   console.log(countriesDeata);
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <h2>Visited: {count}</h2>
      <div className="card">
        {countries.map((countrie) => (
          <Countri
            setCount={setCount}
            count={count}
            key={countrie.cca3.cca3}
            countrie={countrie}
          ></Countri>
        ))}
      </div>
    </div>
  );
};

export default Cuntries;
