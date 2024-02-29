import "../styles/filter.css";


interface Props {
    onSelect: (value: string) => void
}

export default function Filter( { onSelect }: Props) {
  return (
    <select className="filter shadow-lg w-full md:w-[200px] bg-card-background" id="region" onChange={(e) => onSelect(e.target.value)}>
      <option value="All">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
