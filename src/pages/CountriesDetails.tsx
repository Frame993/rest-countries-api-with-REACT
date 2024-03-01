import React from "react";
import flag from "../assets/Flag_of_Russia.svg";

export default function CountriesDetails() {
  return (
    <div className="flex flex-col w-[80%] md:max-w-[1200px] mx-auto mt-10 gap-20 pb-10">
      <button className="flex items-center w-fit gap-2 bg-card-background px-8 py-2 rounded-md shadow-lg pointer">
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

      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <img className="md:w-[50%] w-[100%] object-contain" src={flag} alt="flag" />
        <div className="flex flex-col justify-between gap-6">
          <h1>Country name</h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <p>
                Native name: <span>Belgie</span>
              </p>
              <p>
                Population: <span>11,000,000</span>
              </p>
              <p>
                Region: <span>Europe</span>
              </p>
              <p>
                Sub Region: <span>Europe</span>
              </p>
              <p>
                Capital: <span>Brussels</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                Top Level Domain: <span>.be</span>
              </p>
              <p>
                Currencies: <span>Euro</span>
              </p>
              <p>
                languages: <span>Dutch, French, German</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row gap-6">
          <p>Border Countries:</p>
          <div className="flex gap-4 w-fit flex-wrap items-center">
            <span className="flex items-center w-fit gap-2 bg-card-background px-8 py-2 rounded-md shadow-lg pointer">
              France
            </span>
            <span className="flex items-center w-fit gap-2 bg-card-background px-8 py-2 rounded-md shadow-lg pointer">
              Germany
            </span>
            <span className="flex items-center w-fit gap-2 bg-card-background px-8 py-2 rounded-md shadow-lg pointer">
              netherlands
            </span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
