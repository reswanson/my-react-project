import React from "react";
import { withRouter } from 'react-router-dom'


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
      <br/>
      <i>Logged in as: {this.props.loggedInAs}</i>
      </div>
    );
  }
}


export default Header;