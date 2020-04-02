import React, { Component } from 'react';

import './LoginPage.css';


const divStyle = {	
  alignItems: 'center',
  marginTop: 100
};


class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { username: 'myinitialvalue' };
    this.state = { myenteredusername: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  changeUsername() {
	this.setState({
		username: 'newvalue'
	})
  }


  changeitbackUsername() {
	this.setState({
		username: 'oldvalue'
	})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
	this.setState({
		username: this.state.value
	})
    this.props.changeMyUser(this.state.value)
  }


handleUserFormChange(event) {
    this.setState({myenteredusername: event.target.value});
}


handleUserFormSubmit(event) {
    event.preventDefault();
	this.setState({
		username: this.state.myenteredusername
	})
}

componentDidUpdate(prevProps,prevState) {
  // Typical usage (don't forget to compare props):
  if (prevState.username !== this.state.username) { 
	  console.log("username field has changed to " + this.state.username)
   }
}


  render() {
    return (
      <div style={divStyle}>
      <h3>Welcome (username set from Name form below:) ({this.state.username})</h3>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
        <input type="text" value={this.state.value || ""}  onChange={this.handleChange}/>
          </label>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => this.changeUsername()}>changeuser</button>
      <button onClick={() => this.changeitbackUsername()}>changeuserback</button>
      <p/>
      </div>
    )
  }
}

export default LoginForm;
