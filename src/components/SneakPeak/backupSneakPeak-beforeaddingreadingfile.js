import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Panel from 'react-bootstrap/lib/Panel'

import './SneakPeak.css'

import data from ‘./data/booklist.json’;


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};


const mybooklistdata = data.map( (booklist) => {
	return (
		<Card key= {data.id}>
			<Card.Body>
			  <Card.Title>{ data.name}</Card.Title>
    	    	<Card.Text>
    	  			{data.desc}
    	    	</Card.Text>
		
				<a className="btn-primary"
		 		  href={data.url}
	  				target="_blank">
					Download
				</a>
			</Card.Body>
		</Card>	
	)

})


class LoginForm extends Component {

  render() {
    return (
      <div >
        <h2>Please browse our books</h2>
        <br/>
			<table>
			  <thead>
			  <tr>
			    <th>Title</th>
			    <th>Author</th>
			    <th>ISBN</th>
			  </tr>
	          </thead>
              <tbody>
			  <tr>
			    <td>The long and short of it</td>
			    <td>Stubby Smith</td>
			    <td>4657685746374</td>
			  </tr>
			  <tr>
			    <td>You want it when?</td>
			    <td>RAS</td>
			    <td>8859607056948</td>
			  </tr>
	          </tbody>
              <tfoot>
			    <tr>
			      <td>-----</td>
			      <td>------</td>
			      <td>-------------</td>
			    </tr>
              </tfoot>
			</table>  
			<br/>
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