import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/Header.jsx';
import Login from '../../Login/Login.jsx';

function Auth({
  isAuth, loading, error, onSubmitForm
}) {
  return (
    <div>
      <Header isAuth={isAuth} />
      <Login isAuth={isAuth} loading={loading} error={error} onSubmitForm={onSubmitForm} />
    </div>
  );
}

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired
};

export default Auth;
