import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import './LoginPage.css';


const divStyle = {	
  alignItems: 'left',
  marginTop: 100
};


class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
	this.setState({
		username: this.state.value
	})
    this.props.changeMyUser(this.state.value)
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
      <h3>Welcome {this.state.username}!</h3>

      <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
        <input type="text" value={this.state.value || ""}  onChange={this.handleChange}/>
          </label>
        <br/>
        <label>
          Password:
        <input type="text" />
          </label>
        <input type="submit" value="Submit" />

      </form>

      <Link to='/newuser'>
	    <button type="button" className="btn btn-info">New User</button>
	  </Link>

      <p/>
      </div>
    )
  }
}

export default LoginForm;
