import React, { Component } from 'react';
import LoginForm from './LoginForm';

import './LoginPage.css';

class LoginPage extends Component {
	


  render() {
    return (
      <div className="LoginPage">
        <LoginForm changeMyUser={this.props.changeUser} />
      </div>
    );
  }
}

export default LoginPage;

