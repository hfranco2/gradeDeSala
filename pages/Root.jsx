import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StoreProvider from "../components/Store/Provider";
import RoutesPrivate from "../components/Routes/Private/Private";
import RoutesPublic from "../components/Routes/Public/Public";
import Home from "./Home/Home";
import Login from "./Login/Login";
import App from "../App/App";
const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
        {/* <RoutesPublic path="/" component={Home} /> */}
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
