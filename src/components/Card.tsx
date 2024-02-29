import { Country } from "../interfaces/GetCountriesResponse";

interface Props {
  country: Country;
}

export default function Card({ country }: Props) {
  return (
    <div className="flex flex-col rounded-lg bg-card-background shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl">
      <div className="flex h-[150px]">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={country.flags.svg}
          alt={country.flags.alt}
        />
      </div>
      <div className="flex flex-col p-6">
        <h1 className="mb-4">{country.name.common}</h1>
        <div className="flex flex-col gap-2 text-text-secundary-text">
          <p>
            Population: <span className="country-population">{country.population}</span>
          </p>
          <p>
            Region: <span className="country-region">{country.region}</span>
          </p>
          <p>
            Capital: <span className="country-capital">{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
