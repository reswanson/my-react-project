import React, { Component } from 'react';


// I dont know how to move the import of bookdata into the class so I can
// pass the filename in as a prop
class DeleteUser extends Component {
	
constructor(props) {
    super(props);
    this.state = {
      deleteid: '',
      post: '',
      responseToDelete: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`/api/users/${this.state.deleteid}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.text();
    
    this.setState({ responseToDelete: body });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("handle change in deleteuser: submitted: " + this.state.deleteid)
    
  }



/*handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'GET'
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
     console.log(body);
  };
*/
	
	render () {
		return (
		  <div>
            <br/>
            <form onSubmit={this.handleSubmit}>
              <label>
              Enter id of user to delete:
              <input type="text" name="deleteid" value={this.state.deleteid}  onChange={this.handleChange}/>
              </label>
            </form>
            <br/>
		  </div>
		)
	}	
}

export default DeleteUser;
