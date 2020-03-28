import React, { Component } from 'react';

import bookdata from '../data/booklist.json';

class Showbooklist extends Component {
	
	render () {
		return (
		<div>
		<table>
		  <thead>
		    <tr>
		      <th>Title</th>
		      <th>Author</th>
		      <th>ISBN</th>
		    </tr>
	      </thead>
	    { bookdata.map((books, index)=>{
				return (
				<tbody>
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
