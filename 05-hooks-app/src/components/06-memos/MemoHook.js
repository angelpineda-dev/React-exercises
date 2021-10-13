import { useMemo, useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter";

const MemoHook = () => {
  const { counter, increment } = useCounter(2000);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones.length; i++) {
      console.log("Ahi vamos...");
    }

    return `${iteraciones} iteraciones realizadas.`;
  };

  const memoPP = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h2>Memo Hook</h2>
      <p>
        Counter: <small>{counter}</small>
      </p>
      <p>{memoPP}</p>
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

export default MemoHook;
