import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  // console.log(countriesPromise)
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags,  setVisitedFlags] = useState([])

  const handleVisitedCountries = (country) => {
    // console.log("Country", country);
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  };

  const handleVisitedFlags = (country) =>{
    console.log("helo")
    const newVisitedFlags = [...visitedFlags, country]
    setVisitedFlags(newVisitedFlags)
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries)
  return (
    <div>
      <h2>In the Country: {countries.length}</h2>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries= {handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
