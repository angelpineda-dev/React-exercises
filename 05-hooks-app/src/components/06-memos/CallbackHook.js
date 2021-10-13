import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(1);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h2>useCallback Hook</h2>
      <p>{counter}</p>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
