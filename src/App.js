import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Browse from './components/SneakPeak/Browse';

import Header from "./header";
import Footer from "./footer";

import './App.css';

const Home = () => (
  <HomePage />
);

const SneakPeak = () => (
  <Browse />
);


class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

        <header className="App-header">
          <Header loggedInAs='loggedinasadmin'/>
        </header>

        <Route exact path="/" component={Home} />
        <Route exact path="/browse" component={SneakPeak} />

        <header className="App-header">
          <Footer />
        </header>

        </div>

      </Router>
    );
  }
}

export default App;
