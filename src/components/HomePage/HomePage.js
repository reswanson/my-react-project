import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage'
import SneakPeak from '../SneakPeak/SneakPeak'


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <LoginPage />
        <SneakPeak />
      </div>
    );
  }
}

export default HomePage;
