import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

// import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import LoginPage from './components/LoginPage/LoginPage';


import Browse from './components/SneakPeak/Browse';
import AdminEntry from './components/Admin/AdminEntry';
import Startup from './components/Lifecycle/Startup';
import Shutdown from './components/Lifecycle/Shutdown';

import Header from "./header";
import Footer from "./footer";

import './App.css';

class App extends Component {
  constructor() {
    super();
	this.state = {
	  loggedInAs: 'not logged in'
	}
  }


  onChangeUserName(newName) {
	this.setState({
		loggedInAs: newName
	});
  }


//  onChangeUserName(newName) {
//	this.setState({
//		loggedInAs: newName
//	});
//  }


componentDidMount() {
    Startup()
}

componentWillUnmount () {
	Shutdown()
}

  render() {
    return (
      <Router>

        <div className="App">

        <header className="App-header">
          <Header loggedInAs={this.state.loggedInAs}/>
        </header>  
        
        <ul>
            <Link to="/admin">Admin</Link>
          <br/>
            <Link to="/login">Login</Link>
          <br/>
            <Link to="/browse">Browse</Link>
          <br/>

        </ul>


        <Switch >
          <Route exact path="/admin">
            <AdminEntry />
          </Route>

          <Route path="/login">
            <LoginPage doesitwork="yesitdoes" changeUser={this.onChangeUserName.bind(this)} />
          </Route>

          <Route path="/browse">
            <Browse />
          </Route>
        </Switch>


        <header className="App-footer">
          <Footer />
        </header>

        </div>

      </Router>
    );
  }
}

export default App;
