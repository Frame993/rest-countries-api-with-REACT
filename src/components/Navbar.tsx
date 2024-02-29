import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light-theme");
  const [paragraph, setParagraph] = useState("Dark Mode");

  useEffect(() => {
    const t = localStorage.getItem("theme");

    if (!t) {
      document.documentElement.classList.add("light-theme");
      return setTheme("light-theme"), setParagraph("Dark Mode");
    }

    setTheme(t);
    document.documentElement.classList.add(t);
  }, []);

  const toggleThemeMode = () => {
    setParagraph(paragraph == "Dark Mode" ? "Light Mode" : "Dark Mode");

    // esto es para cambiar el tema
    setTheme(theme == "light-theme" ? "dark-theme" : "light-theme");
    document.documentElement.classList.toggle("dark-theme");
    document.documentElement.classList.toggle("light-theme");

    localStorage.setItem(
      "theme",
      theme == "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    // este es el div del navbar
    <div className="flex items-center justify-center w-full h-[80px] bg-card-background">
      <div className="flex items-center justify-between w-[90%] md:max-w-[1200px]">
        <h1>Where in the world?</h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleThemeMode}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="00000060" />
            <path d="M16.418 4.157a8 8 0 0 0 0 15.686" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
