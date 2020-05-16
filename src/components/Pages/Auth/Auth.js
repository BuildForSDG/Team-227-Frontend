import React from 'react';
import Header from '../../Header/Header.jsx';
import Login from '../../Login/Login.jsx';

function Auth() {
  const isAuth = Math.floor(Math.random() * 2) !== 0;
  return (
    <div>
    <Header isAuth={isAuth} />
      <Login />
    </div>
  );
}

export default Auth;
