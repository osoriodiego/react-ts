import "./App.css";
import { Counter } from "./components/counter";
import { Form } from "./components/form";
import { ReducerCounter } from "./components/reducerCounter";
import { TimerOrigin } from "./components/timerOrigin";
import { User } from "./components/user";

function App() {
  return (
    <>
      <Counter />
      <User />
      <br />
      <TimerOrigin />
      <br />
      <ReducerCounter />
      <br />
      <Form />
    </>
  );
}

export default App;
