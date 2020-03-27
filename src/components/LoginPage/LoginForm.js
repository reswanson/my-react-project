import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 30,
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



  render() {
    return (
      <div style={divStyle}>
      <form stype={panelStyle} onSubmit={this.mySubmitHandler}>
      <p>Login with your email:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      <p>Click to browse our store:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='Browse'
      />
      </form>


      </div>
    )
  }
}

export default LoginForm;
