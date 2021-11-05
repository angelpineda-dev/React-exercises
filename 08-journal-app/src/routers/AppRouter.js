import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }

      setChecking(false);
    });
  }, [setIsLogged, dispatch]);

  if (checking) {
    return <h1>Cargando...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isLogged={isLogged}
            component={AuthRouter}
            path="/auth"
          />

          {/* <Route path="/" component={JournalScreen} exact /> */}

          <PrivateRoute
            isLogged={isLogged}
            component={JournalScreen}
            path="/"
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
