import React from "react";
import "./counter.css";
import { useCounter } from "./hooks/useCounter";

const CounterWithCustomHook = () => {
  //Custon hook
  let { state, increment, decrement, reset } = useCounter(15);

  return (
    <div>
      <h2>Counter With Hook: {state}</h2>
      <br />
      <button className="btn" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={() => decrement(3)}>
        -1
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
