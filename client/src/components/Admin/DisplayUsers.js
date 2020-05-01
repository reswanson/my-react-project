import React, { Component } from 'react';


// I dont know how to move the import of bookdata into the class so I can
// pass the filename in as a prop
class DisplayUsers extends Component {
		
/*			      { this.props.userlist.map((users, index)=> {
				return (
				<tbody key={index.toString()}>
			     <tr>
  					<td>{users.username}</td>
  					<td>{users.email}</td>
				</tr>
				</tbody>
				)
		    })}
*/
		
		
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
