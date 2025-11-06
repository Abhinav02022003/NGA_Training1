import React, { useState } from "react";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";
import { NumberItem } from "./types";

const App: React.FC = () => {
  const initialNumbers: NumberItem[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
  ];

  const [numbers, setNumbers] = useState<NumberItem[]>(initialNumbers);

  const filterEven = () => {
    const filtered = numbers.filter((num) => num.value % 2 === 0);
    setNumbers(filtered);
  };

  const doubleNumbers = () => {
    const doubled = numbers.map((num) => ({ value: num.value * 2 }));
    setNumbers(doubled);
  };

  const reset = () => setNumbers(initialNumbers);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>JSX & JavaScript Concepts Sprint</h1>
      <FilterControls
        onFilterEven={filterEven}
        onDoubleNumbers={doubleNumbers}
        onReset={reset}
      />
      <NumberList numbers={numbers} />
      <Logger numbers={numbers} />
      <HoistingDemo />
      <ConstructorDemo />
    </div>
  );
};

export default App;
