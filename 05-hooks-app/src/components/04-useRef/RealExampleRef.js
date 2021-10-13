import { useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Real Example Ref</h2>

      {show && <MultipleCustomHooks />}
      <button className="btn btn-secondary mt-2" onClick={() => setShow(!show)}>
        Show / Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
