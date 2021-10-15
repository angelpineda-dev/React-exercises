import { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({});
  };
  return (
    <div>
      <h2>About</h2>
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default AboutScreen;
