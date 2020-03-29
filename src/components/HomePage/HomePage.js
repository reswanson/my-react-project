import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage'
import Browse from '../SneakPeak/Browse'


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
 		<LoginPage />
      </div>
    );
  }
}

export default HomePage;
