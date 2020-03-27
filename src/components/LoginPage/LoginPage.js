import React, { Component } from 'react';
import LoginForm from './LoginForm';

import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <h2> Im here!!! </h2>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;

