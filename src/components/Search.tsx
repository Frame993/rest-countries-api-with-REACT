interface Props {
  onSearch: (searchText: string) => void;
}

export default function Search({ onSearch }: Props) {
  return (
    <div  className="flex w-full md:w-[400px] h-[50px] rounded-[6px] px-5 shadow-lg bg-white items-center gap-3">
      <svg
        width="16"
        height="16"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.75 26.75L19.388 19.388M19.388 19.388C21.3108 17.4653 22.5 14.809 22.5 11.875C22.5 6.00697 17.743 1.25 11.875 1.25C6.00697 1.25 1.25 6.00697 1.25 11.875C1.25 17.743 6.00697 22.5 11.875 22.5C14.809 22.5 17.4653 21.3108 19.388 19.388Z"
          stroke="#00000060"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input
      className="border-none outline-none"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
