import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import StoreContext from "../../Store/Context";
import App from "../../../App/App";

const RoutesPublic = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() => (token ? <Component {...rest} /> : <Redirect to="/App" />)}
    />
  );
};

export default RoutesPublic;
