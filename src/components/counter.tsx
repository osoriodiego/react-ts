import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const disableReset = count === 0;

  const increment = (value: number): void => {
    setCount(count + value);
  };

  const decrement = (value: number): void => {
    setCount(count - value);
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => decrement(1)} className="btn btn-secondary">
        -1
      </button>
      <button onClick={reset} disabled={disableReset}>
        reset
      </button>
      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
