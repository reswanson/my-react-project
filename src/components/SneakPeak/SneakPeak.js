import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//import Showbooklist from '../Showbooklist/Showbooklist'

import BookList from "../Lifecycle/Booklist";
import { BooklistProvider } from "../Lifecycle/BooklistContext";

import './SneakPeak.css'



class LoginForm extends Component {

  render() {
    return (
      <div >
        <h2>Please browse our books</h2>
        <br/>
			<br/>
			  return (
			    <BooklistProvider>
			      <div className="container">
			        <BookList />
			      </div>
			    </BooklistProvider>
			  );
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