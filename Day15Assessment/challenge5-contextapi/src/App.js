import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
