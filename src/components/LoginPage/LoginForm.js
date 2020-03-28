import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

import SneakPeak from '../SneakPeak/SneakPeak'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};


const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {
	
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  shoot() {
	<SneakPeak />
    alert("Great Shot!");
  }


  render() {
    return (
      <div style={divStyle}>
      <form onSubmit={this.mySubmitHandler}>
      <p>Login with your email:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
      </div>
    )
  }
}

export default LoginForm;
