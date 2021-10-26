import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import LoginScreen from "../components/auth/LoginScreen"
import RegisterScreen from "../components/auth/RegisterScreen"

const AuthRouter = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />

        <Redirect to="/auth/login"/>
      </Switch>

    </Router>
  )
}

export default AuthRouter
