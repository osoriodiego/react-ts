import { useState } from "react";
import { Timer } from "./timer";

export const TimerOrigin = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  return (
    <>
      <span>Milisegundos: {miliseconds}</span>
      <br />
      <button onClick={() => setMiliseconds(1000)}>+1</button>
      <button onClick={() => setMiliseconds(2000)}>+2</button>

      <Timer miliseconds={miliseconds} />
    </>
  );
};
