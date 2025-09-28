import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  // console.log(country)

  const [Visited, setVisited] = useState(false);
  const handleVisited = () => {
    // if(Visited){
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }

    // setVisited(Visited? false:true)

    setVisited(!Visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${Visited && "Visited"}`}>
      <img
        className="img"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h3>Name: {country.name.common}</h3>
      <h3>Population: {country.population.population}</h3>
      <h2>
        {country.population.population > 100000
          ? " A large number of people"
          : "A small number of people"}
      </h2>
      <h3>RegionM: {country.region.region}</h3>

      <button onClick={handleVisited}>
        {Visited ? "Visited" : "Not Visited"}
      </button>

      <button onClick={handleVisitedFlags}>Visited Flags</button>
    </div>
  );
};

export default Country;
