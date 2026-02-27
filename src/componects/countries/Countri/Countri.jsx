const Countri = ({ countrie }) => {
  const { name, flags, capital, continents, languages } = countrie;
  return (
    <div>
      <img src={flags?.flags?.png} alt={flags?.flags?.alt} />
      <h3>Name: {name.common}</h3>
      <h3>Capital: {capital.capital}</h3>
      {languages?.languages?.eng && <p>Language: {languages.languages.eng}</p>}
      <p>Continents: {continents.continents}</p>
    </div>
  );
};

export default Countri;
