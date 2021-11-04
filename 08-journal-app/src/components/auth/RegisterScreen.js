import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import validator from "validator";

const initialForm = {
  name: "Angel",
  email: "correo@dominio.com",
  password: "123456",
  password2: "123456",
};

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log("Formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      const errMsg = "Name is required";
      dispatch(setError(errMsg));

      return false;
    } else if (!validator.isEmail(email)) {
      const errMsg = "Email is not valid";

      dispatch(setError(errMsg));
      return false;
    } else if (password !== password2 || password.length < 5) {
      const errMsg =
        "Password should be at least 6 character and match each other.";

      dispatch(setError(errMsg));

      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <div>
      <h3 className="auth__title mb-5">Register</h3>

      <div className="auth__alert-error">Hola Mundo</div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
