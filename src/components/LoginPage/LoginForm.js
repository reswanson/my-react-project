import React from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

import SneakPeak from '../SneakPeak/SneakPeak'

const divStyle = {
  alignItems: 'center',
  marginTop: -100
};


const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends React.Component {
  
  constructor() {
    super();
    this.state = { username: 'myinitialvalue' };
    this.state = { myenteredusername: '' };

    this.handleChange = this.handleUserFormChange.bind(this);
    this.handleSubmit = this.handleUserFormSubmit.bind(this);
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

// Maybe implement a reset username field
// resetUsername() {
// }
//       <button onClick={() => this.resetUsername()}>Reset user field</button>


handleUserFormChange(event) {
    this.setState({myenteredusername: event.target.value});
}


handleUserFormSubmit(event) {
	this.setState({
		username: this.state.myenteredusername
	})
    event.preventDefault();
}




  render() {
    return (
      <div style={divStyle}>
      <h3>Welcome (username set from form) ({this.state.username})</h3>
      <h4>Welcome (testing passed in props from route) ({this.props.username})</h4>


      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
        <input type="text" value={this.state.myenteredusername}  onChange={this.handleChange}/>
          </label>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => this.changeUsername()}>changeuser</button>
      <button onClick={() => this.changeitbackUsername()}>changeuserback</button>


      </div>
    )
  }
}

export default LoginForm;
