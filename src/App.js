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


//  These are the different things I tried to pass props in with <Route>
// <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />
// <Route path='/mybooks' render={routeProps => <Books {...routeProps} booksGetter={getMyBooks}/>} />
// <Route exact path="/props-through-render" render={(props) => <PropsPage {...props}      title={`Props through render`} />} />
// <Route path="/greeting/:name" render={(props) => <Greeting text="Hello, " {...props} />} />
// <Route exact path='/' render={(props) => <LoginForm {...props} doesitwork="2" userName={this.onChangeUserName.bind(this)} />} />

// <Route path="/" render={(props) => <LoginForm  doesitwork="Hello" {...props} />} />
// <Route path="/" doesitwork="Hello" component={Form}/>
// <Route path="/" render={MyLoginForm} />
// <Route path='/' render={routeProps => <LoginForm {...routeProps} doesitwork="yesitdoes"/>}  />

// <Route path="/" render={(props) => <LoginForm doesitwork="yesitdoes"/>}/>

// <Route exact path="/" component={() => <LoginForm doesitwork={"yesitdoes"} />} />

//         <Route  path="/" 
//          render={(routeProps) => (<LoginForm {...routeProps} doesitwork="yesitdoes" />)} 
//		/>
//<Route
//  path="/"
//  render={(routeProps) => (
//    <LoginForm {...routeProps} doesitwork={'yesitdoes'} />
//  )}
// />

//        <Route exact path="/" component={Form} />

//       <Route
//         path="/"
//         render={props => (
//              // pass the sub-routes down to keep nesting
//           <route.component {...props} doesitwork="yesitodoes" />
//          )}
//        />

// <Route path="/" doesitwork="yesitdoes" render={props => <LoginForm {...props} doesitwork="yesitdoes" />} />


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


        <header className="App-header">
          <Footer />
        </header>

        </div>

      </Router>
    );
  }
}

export default App;
