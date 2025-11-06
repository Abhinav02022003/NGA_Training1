import React from "react";

interface FilterControlsProps {
  onFilterEven: () => void;
  onDoubleNumbers: () => void;
  onReset: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  onFilterEven,
  onDoubleNumbers,
  onReset,
}) => {
  return (
    <div>
      <h2>Controls</h2>
      <button onClick={onFilterEven}>Show Even Numbers</button>
      <button onClick={onDoubleNumbers}>Double Numbers</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default FilterControls;
