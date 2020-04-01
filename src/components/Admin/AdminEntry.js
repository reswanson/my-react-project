import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './AdminEntry.css'


class AdminEntry extends Component {

  render() {
    return (
      <div >
        <h2>Admin Page</h2>
        <br/>
          <Link to='/'>
            <button type="button" className="btn btn-info">Back to Main page</button>
          </Link>    
	  </div>
    )
  }
}




export default AdminEntry;