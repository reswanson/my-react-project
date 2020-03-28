import React from "react";
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom'
import {browserHistory} from 'react-router';


import Browse from './components/SneakPeak/Browse'



const BrowseButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/browse') }}
  >
    Click to Browse our store
  </button>
))

class Header extends React.Component {
	

  render() {
	const href=`/browse`
	
    return (
	  <div>Ron's Bookstore - Awesome books - low prices
      <br/>
      <BrowseButton />

      </div>
    );
  }
}


export default Header;