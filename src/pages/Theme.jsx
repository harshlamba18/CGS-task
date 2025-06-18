// ThemeToggler component for switching between light and dark mode

// Importing necessary libraries and styles
import { useEffect, useState } from "react";
import "../CSSfiles/LogSign.css";

function ThemeToggler() {
  const [theme, setTheme] = useState(() => {                           // Initialize theme from localStorage or default to dark
    return localStorage.getItem("theme") || "dark";
  });

  const toggleTheme = () => {                                         // Function to toggle between light and dark themes
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {                                                   // Apply the theme to the document body class
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
