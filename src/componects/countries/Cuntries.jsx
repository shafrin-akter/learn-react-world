import { use } from "react";
const Cuntries = ({ coutriesPromise }) => {
  const countriesDeata = use(coutriesPromise);
  const countries = countriesDeata.countries;
  console.log(countriesDeata);
  return (
    <div>
      <h1>Countries: {countries.length}</h1>
    </div>
  );
};

export default Cuntries;
