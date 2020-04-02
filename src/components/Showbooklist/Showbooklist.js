import React, { Component } from 'react';

import bookdata from '../data/booklist.json';
import RefreshData from '../Lifecycle/RefreshData';


// I dont know how to move the import of bookdata into the class so I can
// pass the filename in as a prop
class Showbooklist extends Component {
	
	
	
	render () {
		return (
		<div>
		<RefreshData />
		<h4> Data file passed in from parent was: {this.props.datafile} </h4>
		<br/>
		<table>
		  <thead>
		    <tr>
		      <th>Title</th>
		      <th>Author</th>
		      <th>ISBN</th>
		    </tr>
	      </thead>
	      { bookdata.map((books, index)=> {
				return (
				<tbody key={index.toString()}>
			     <tr>
  					<td>{books.name}</td>
  					<td>{books.author}</td>
  					<td>{books.isbn}</td>
				</tr>
				</tbody>
				)
		    })}
            <tfoot>
			  <tr>
			    <td>-----</td>
			    <td>------</td>
			    <td>-------------</td>
			  </tr>
            </tfoot>
			</table>  

		</div>
		)
	}	
}

export default Showbooklist;
