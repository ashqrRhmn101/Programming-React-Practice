import { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PricingOption from "./components/PricingOption/PricingOption";
import ResultChart from "./components/ResultChart/ResultChart";

const pricingPromise = fetch('PricingOption.json').then(res => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Suspense>

        <PricingOption pricingPromise={pricingPromise}/>
        </Suspense>
        <ResultChart/>
      </main>
    </>
  );
}

export default App;
