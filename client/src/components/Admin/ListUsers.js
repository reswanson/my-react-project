import React, { Component } from 'react';
import DisplayUsers from './DisplayUsers'



// I dont know how to move the import of bookdata into the class so I can
// pass the filename in as a prop
class ListUsers extends Component {
	
constructor(props) {
    super(props);
    this.state = {
      response: '',
      post: '',
      responseToPost: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'GET'
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
     console.log(body);
  };

	
	render () {
		return (
		  <div>
            <button type="submit"  onClick={this.handleSubmit}>List users</button>
            <br/>
            <DisplayUsers userlist={this.state.responseToPost} />
		  </div>
		)
	}	
}

export default ListUsers;
