import { useEffect, useRef, useState } from "react";

type TimerProps = {
  miliseconds: number;
};

export const Timer = ({ miliseconds }: TimerProps) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      clearInterval(ref.current);
    }

    ref.current = setInterval(() => setSeconds((sec) => sec + 1), 1000);
  }, [miliseconds]);

  const start = () => {};
  const stop = () => {};

  return (
    <div>
      <h2>Timer</h2>
      <p>Time: {seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
