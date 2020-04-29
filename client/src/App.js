import React, { Component } from 'react';
import { connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import NewUser from './components/NewUser/NewUser';
import Browse from './components/SneakPeak/Browse';
import AdminEntry from './components/Admin/AdminEntry';
import Startup from './components/Lifecycle/Startup';
import Shutdown from './components/Lifecycle/Shutdown';
import Header from "./header";
import Footer from "./footer";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
	this.state = {
	  loggedInAs: 'not logged in'
	}
  }

  onChangeUserName(newName) {
	this.setState({
		loggedInAs: newName
	});
  }

componentDidMount() {
    Startup()
}

componentWillUnmount () {
	Shutdown()
}

//       <p>{this.props.mynewvalue.map(home => <div>{loggedIn}</div>)}</p>
//       <p>mybookstore {this.props.mynewvalue}</p>

  render() {
    return (
      <Router>

        <div className="App">

        <header className="App-header">
          <Header loggedInAs={this.state.loggedInAs}/>
        </header> 

       <p>Redux counter example: items in cart:  ( {this.props.mynewvalue} )</p>
       <button onClick={this.props.login}>Add item to cart + </button>
       <button onClick={this.props.logout}>Remove item from cart - </button>
 
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
            <LoginPage changeUser={this.onChangeUserName.bind(this)} />
          </Route>

          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
        <header className="App-footer">
          <Footer />
        </header>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
return {
  mynewvalue: state
 };
}

function mapDispatchToProps(dispatch) {
 return {
  login: () => dispatch({type: 'LOG_IN'}),
  logout: () => dispatch({type: 'LOG_OUT'})
 };
}


// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);


