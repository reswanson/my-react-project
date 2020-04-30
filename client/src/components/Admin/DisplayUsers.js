import React, { Component } from 'react';


// I dont know how to move the import of bookdata into the class so I can
// pass the filename in as a prop
class DisplayUsers extends Component {
		
		/*	{ this.props.body.map((users, index)=> {
				return (
				   <ul key={index.toString()}>
  				     {users.username}</ul>
				)
		    })}*/

	render () {
		return (
		  <div>
            <h5> List of users in the DB</h5>
            <p/>
            {this.props.userlist}
		  </div>
		)
	}	
}

export default DisplayUsers;
