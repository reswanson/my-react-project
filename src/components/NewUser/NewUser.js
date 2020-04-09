import React, { Component } from 'react';

const divStyle = {	
  alignItems: 'center',
  marginTop: 100
};


class NewUser extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("handle change in newuser: submitted: " + this.state.submitted)
    
  }



  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
	  console.log("handle User : " + username)
      console.log("handle pwd : " + password)

      // Call to handle new user request
      // this.props.login(username, password);
    }

  }



  render() {
    const { username, password, submitted } = this.state;

    return (
      <div style={divStyle}>
      <h3>Please enter the following information to create a new user</h3>

      <form onSubmit={this.handleSubmit}>
        <label>
          UserName (email):
        <input type="text" name="username" value={username}  onChange={this.handleChange}/>
          </label>
        <br/>
        <label>
          Password:
        <input type="password" name="password" value={password} onChange={this.handleChange} />


          </label>
        <br/>
        <input type="submit" value="Create user" />

      </form>


      <p/>
      </div>
    )
  }
}

export default NewUser;