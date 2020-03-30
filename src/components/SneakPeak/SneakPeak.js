import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Panel from 'react-bootstrap/lib/Panel'
import Showbooklist from '../Showbooklist/Showbooklist'


import './SneakPeak.css'

import bookdata from '../data/booklist.json';



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};


class LoginForm extends Component {

  render() {
    return (
      <div >
        <h2>Please browse our books</h2>
        <br/>
			<br/>
            <Showbooklist datafile="booklist.json"/>
            <Link to='/'>
              <button type="button" className="btn btn-info">Back to Main page</button>
            </Link>
<p/>
            <img className="Sidebar" alt=" " />

	  </div>
    )
  }
}




export default LoginForm;