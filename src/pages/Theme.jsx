import { useEffect, useState } from "react";
import "../CSSfiles/LogSign.css";

function ThemeToggler() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("lightmode", theme === "light");
  }, [theme]);

  return (
    <div className="theme-toggler">
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default ThemeToggler;
