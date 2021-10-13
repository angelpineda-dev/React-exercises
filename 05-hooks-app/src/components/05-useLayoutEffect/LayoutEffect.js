import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../01-useState/hooks/useCounter";
import { useFetch } from "../03-examples/hooks/useFetch";
import "./layout.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const refP = useRef({});
  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  let { quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(refP.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h2>Layout Effect</h2>
      <br />

      <blockquote className="blockquote text-end">
        <p className="mb-3" ref={refP}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};

export default Layout;
