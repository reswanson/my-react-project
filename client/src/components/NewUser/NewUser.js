import React, { Component } from 'react';


class NewUser extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      submitted: false,
      response: '',
      post: '',
      responseToPost: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("handle change in newuser: submitted: " + this.state.submitted)
    
  }


  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };



  render() {
    return (

<div>	
	    <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
        <input type="text" name="username" value={this.state.username}  onChange={this.handleChange}/>
          </label>
        <br/>
        <label>
          Password:
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        <br/>
        <label>
          Email:
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
        <br/>
        <input type="submit" value="Create user" />
      </form>


	</div>
    )
  }
}

 //       <form onSubmit={this.handleSubmit}>
 //         <p>
 //           <strong>Post to Server:</strong>
 //         </p>
 //         <input
 //           type="text"
 //           value={this.state.post}
 //           onChange={e => this.setState({ post: e.target.value })}
 //         />
 //         <button type="submit">Submit</button>
 //       </form>



//NewUser.contextTypes = {
//    store: PropTypes.object
//}




export default NewUser;