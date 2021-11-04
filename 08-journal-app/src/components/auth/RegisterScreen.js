import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const RegisterScreen = () => {
  const initialForm = {
    name: "Angel",
    email: "correo@dominio.com",
    password: "123456",
    password2: "123456",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { name, email, password, password2 } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password, password2);
  };

  const isFormValid = () => {
    //TODO:
  };

  return (
    <div>
      <h3 className="auth__title mb-5">Register</h3>
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
