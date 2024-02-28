import { useState } from "react";
import { Country, Region } from "../interfaces/GetCountriesResponse";
import { useEffect } from "react";

export const useCountry = () => {
  const [countries, setCountries] = useState([] as Country[]);
  const [filteredCountries, setFilteredCountries] = useState([] as Country[]);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setFilteredCountries(data);
  };

  const searchCountries = (search: string) => {
    return setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const filterByRegion = (region: string) => {
    if (region === "All") {
      return setFilteredCountries(countries);
    }
    return setFilteredCountries(countries.filter((country) => country.region === region));
  }

  useEffect(() => {
    getCountries();
  }, []);

  return { getCountries, countries, filteredCountries, searchCountries, filterByRegion };
};
