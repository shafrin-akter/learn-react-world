import { Suspense } from "react";
import "./App.css";
import Cuntries from "./componects/countries/Cuntries";
const CountriesDataLoad = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};
// const coutriesPromise = fetch(
//   "https://openapi.programming-hero.com/api/all",
// ).then((res) => res.json());
function App() {
  const coutriesPromise = CountriesDataLoad();

  return (
    <>
      <Suspense fallback={<p>Waiting For Loading Data.</p>}>
        <Cuntries coutriesPromise={coutriesPromise}></Cuntries>
      </Suspense>
    </>
  );
}

export default App;
