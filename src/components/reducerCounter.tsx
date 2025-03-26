import { useReducer } from "react";
const initialState = { count: 0 };

type Actions =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

const stateReducer = (state: typeof initialState, action: Actions) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    // return { ...state, count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    // return { ...state, count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      return state;
  }
};

export const ReducerCounter = () => {
  const [counteState, dispatch] = useReducer(stateReducer, initialState);

  return (
    <>
      <h2>Count: {counteState.count}</h2>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-secondary"
      >
        -1
      </button>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary"
      >
        +1
      </button>
      <button onClick={() => dispatch({ type: "reset" })} className="btn ">
        reset
      </button>
      <button
        onClick={() => dispatch({ type: "set", payload: 100 })}
        className="btn"
      >
        set
      </button>
    </>
  );
};
