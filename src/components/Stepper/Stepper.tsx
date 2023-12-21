// Stepper.tsx
import React from "react";

interface StepperProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Stepper: React.FC<StepperProps> = ({
  value,
  minValue = 1,
  maxValue = 10,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      <button onClick={onDecrement} disabled={value <= minValue}>
        -
      </button>
      <span>{value}</span>
      <button onClick={onIncrement} disabled={value >= maxValue}>
        +
      </button>
    </div>
  );
};

export default Stepper;
