import { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomeScreen;
