import { useState } from "react";
import { useEffect } from "react";
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  const [theme, setTheme] = useState("light-theme");
  // const [paragraph, setParagraph] = useState("Dark Mode");

  useEffect(() => {
    const t = localStorage.getItem("theme");

    if (!t) {
      document.documentElement.classList.add("light-theme");
      return setTheme("light-theme");
    }

    setTheme(t);
    document.documentElement.classList.add(t);
  }, []);

  const toggleThemeMode = () => {
    // setParagraph(paragraph == "Dark Mode" ? "Light Mode" : "Dark Mode");

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
          <ThemeIcon currentTheme={theme} />
          <p className="hidden md:block">{theme == "dark-theme" ? "Light Mode" : "Dark Mode"}</p>
        </div>
      </div>
    </div>
  );
}
