import { useCountry } from "../hooks/useCountry";
import Card from "../components/Card";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";

export default function Countries() {

  const { filteredCountries, searchCountries, filterByRegion } = useCountry();

  const navigate = useNavigate()


  return (
    <div className="flex flex-col w-[80%] md:max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:h-[120px] h-[180px] items-center gap-6 mt-5">
        <Search onSearch={searchCountries} />
        <Filter onSelect={filterByRegion}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredCountries?.map((country) => (
          <Card onCountryClick={(country) => navigate(`/details/${country.name.common}`, { state: country })} key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}
