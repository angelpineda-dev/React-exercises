import { Redirect, Route } from "react-router";

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;
