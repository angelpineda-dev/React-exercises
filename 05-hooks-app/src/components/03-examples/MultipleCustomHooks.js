import { useCounter } from "../01-useState/hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  /* 
    null retorna null
    !null retorna true
    !!null retorna false
  */

  let { author, quote } = !!data && data[0];

  return (
    <div>
      <h2>Multiple Custom Hooks!</h2>
      <br />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
