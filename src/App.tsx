import "./App.css";
import { Counter } from "./components/counter";
import { TimerOrigin } from "./components/timerOrigin";
import { User } from "./components/user";

function App() {
  return (
    <>
      <Counter />
      <User />
      <br />
      <TimerOrigin />
    </>
  );
}

export default App;
