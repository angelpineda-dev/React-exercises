import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const userData = {
    id: 123,
    name: "Angel Pineda",
  };

  return (
    <div>
      <h2>Login</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => setUser(userData)}
      >
        Login
      </button>
    </div>
  );
};
