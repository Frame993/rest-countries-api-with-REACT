import { useState } from "react";
import { Country } from "../interfaces/GetCountriesResponse";
import { useEffect } from "react";

export const useCountry = () => {
  const [countries, setCountries] = useState([] as Country[]);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return { getCountries, countries };
};
