import { useCountry } from "../hooks/useCountry";
import Card from "../components/Card";
import Search from "../components/Search";
import Filter from "../components/Filter";

export default function Countries() {
  const { filteredCountries, searchCountries, filterByRegion } = useCountry();

  return (
    <div className="flex flex-col w-[90%] md:max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:h-[120px] h-[180px] items-center gap-6 mt-5">
        <Search onSearch={searchCountries} />
        <Filter onSelect={filterByRegion}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {filteredCountries?.map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}
