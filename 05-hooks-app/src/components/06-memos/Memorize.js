import { useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Memorize</h2>
      <p>
        Counter: <Small value={counter} />
      </p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide
        {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
