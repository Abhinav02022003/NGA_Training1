import React from "react";
import { NumberItem } from "../types";

interface LoggerProps {
  numbers: NumberItem[];
}

const Logger: React.FC<LoggerProps> = ({ numbers }) => {
  const logNumbers = () => {
    console.log("Logging numbers using forEach:");
    numbers.forEach((num) => console.log(num.value));
  };

  return (
    <div>
      <h2>Logger</h2>
      <button onClick={logNumbers}>Log Numbers to Console</button>
    </div>
  );
};

export default Logger;
