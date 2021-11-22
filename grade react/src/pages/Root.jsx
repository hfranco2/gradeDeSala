import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from './components/Store'
import RoutesPrivate from '../components/Routes/Private/Private';
import Home from './Home';
import Login from './Login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
    <Switch>
      <Route path="/login" component={Login} />
      <RoutesPrivate path="/" component={Home} />
    </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
