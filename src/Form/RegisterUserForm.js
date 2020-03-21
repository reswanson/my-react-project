import React from 'react';
import FirstChild from '../firstchild';  // we need to import the child component first



class RegisterUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        	  <h2> Register New User </h2>

        <label>
          User name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p/>
        The username is: ( {this.state.value} )
        <hr/>
        <FirstChild wherecalledfrom = "fromregisteruserform"/>
      </form>
    );
  }
}

export default RegisterUserForm;