import React, { Component } from 'react';

import listperms from '../data/listofpermissions.json';
import RefreshData from '../Lifecycle/RefreshData';


// I dont know how to move the import of bookdata into the class so I can
// pass the filename in as a prop
class ListPermissions extends Component {
		
	render () {
		return (
		  <div>
		    <RefreshData datatype="permissions"/>
		    <br/>
            <hr/>
            <h5> List of available permissions from listofpermissions.json</h5>
			{ listperms.map((perms, index)=> {
				return (
				   <ul key={index.toString()}>
  				     {perms.name}</ul>
				)
		    })}

		  </div>
		)
	}	
}

export default ListPermissions;
