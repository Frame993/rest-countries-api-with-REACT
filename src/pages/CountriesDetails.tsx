import { useLocation } from "react-router-dom";
import { Country } from "../interfaces/GetCountriesResponse";

export default function CountriesDetails() {
  const location = useLocation();
  const country = location.state as Country;

  return (
    <div className="flex flex-col w-[80%] md:max-w-[1200px] mx-auto mt-10 gap-20 pb-10">
      <button
        onClick={() => window.history.back()}
        className="flex items-center w-fit gap-2 bg-card-background px-8 py-2 rounded-md shadow-lg pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-narrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="" />
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <img
          className="h-full w-full object-cover shadow-lg rounded-lg aspect-[559/373]"
          src={country.flags.svg}
          alt={`${country.name.common}`}
        />
        <div className="flex flex-col gap-6 justify-center">
          <h1>Country name</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <p>
                Native name: <span>{country.name.official}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Top Level Domain: <span>{country.tld}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>
                  {country.currencies instanceof Array &&
                    country.currencies.map((currency: any) => currency.name)}
                </span>
              </p>
              <p>
                languages:{" "}
                <span>
                  {country.languages instanceof Array &&
                    country.languages.map((language: any) => language.name)}
                </span>
              </p>

            </div>
          </div>
          {country.borders && country.borders?.length > 0 && (
            <div className="flex flex-col items-start md:items-start lg:items-center md:flex-col lg:flex-row gap-6">
            <p>Border Countries:</p>
            <div className="flex gap-4 w-fit flex-wrap items-center">
              {country.borders?.map((border: string) => (
                <span className="flex items-center w-fit gap-2 bg-card-background px-8 py-2 rounded-md shadow-lg pointer">
                  {border}
                </span>
              ))}
            </div>
          </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
