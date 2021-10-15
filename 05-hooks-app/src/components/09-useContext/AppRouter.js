import { HashRouter, Switch, Route, Link } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import NavBar from "./NavBar";
const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route
            path="*"
            children={
              <div>
                <h1>Error 404 - Not Found</h1>
                <Link to="/">Regresar</Link>
              </div>
            }
          ></Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
