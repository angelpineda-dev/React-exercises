/* useEffect es un hook que nos va a permitir ejecutar un efecto secundario cuando algo suceda en nuestros componentes.*/

import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  /* No se puede tener un hook de manera condicional o que se renderice en un componente. Es considerado una mala practica y react no lo aceptara
  
  if (true){
    const [state, setState] = useState()
  }

  */

  let { name, email } = formState;

  useEffect(() => {
    //console.log("Hey!");
  }, []);

  useEffect(() => {
    //console.log("formState cambio");
  }, [formState]);

  useEffect(() => {
    //console.log("email cambio");
  }, [email]);

  //computando la propiedad con [ target.name]

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h2>Simple Form con useEffect</h2>
      <br />
      <div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </div>
  );
};

export default SimpleForm;
