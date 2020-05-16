import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Auth from './Pages/Auth/Auth';

/**
 * Router Component
 * @constant Root
 * @prop store
 */
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/sign-in" component={Auth} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
