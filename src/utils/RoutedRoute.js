import { Route, Navigate } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, changeAuth, ...rest }) => (
  auth ? <Component handleLogin={changeAuth} {...rest}/> : <Navigate to="/" />

)

export default GuardedRoute;