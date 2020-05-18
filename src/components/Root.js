import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header.jsx';
import AuthService from '../containers/AuthService/AuthService.jsx';

/**
 * Router Component
 * @func Root
 * @prop store
 */
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/sign-in" component={AuthService} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
