import { Redirect, Route } from "react-router";

const PublicRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
