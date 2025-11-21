import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

export default Home;
