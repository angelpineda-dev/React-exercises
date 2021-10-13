import { useRef } from "react";

const FocusScreen = () => {
  const refInput = useRef();

  const handleClick = () => {
    refInput.current.select();
  };

  return (
    <div>
      <h2>Focus Screen</h2>
      <br />
      <input
        type="text"
        placeholder="Nombre"
        className="form-control"
        ref={refInput}
      />

      <button className="mt-2 btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
