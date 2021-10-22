import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <PrivateRoute
          isAuth={user.logged}
          path="/"
          component={DashboardRoutes}
        />
      </Switch>
    </Router>
  );
};
