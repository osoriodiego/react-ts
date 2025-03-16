import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (value: number): void => {
    setCount(count + value);
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment(1)}> +1</button>
      <button onClick={() => increment(2)}> +2 </button>
      <button onClick={reset}> reset </button>
    </div>
  );
};
