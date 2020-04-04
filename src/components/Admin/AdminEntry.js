import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ListPermissions from './ListPermissions'
import './AdminEntry.css'


class AdminEntry extends Component {

  render() {
    return (
      <div className="AdminPage">
        <h2>Admin Page</h2>
        <br/>
        <Link to='/'>
          <button type="button" className="btn btn-info">Back to Main page</button>
        </Link>  
        <ListPermissions />
        <br/>

	  </div>
    )
  }
}




export default AdminEntry;