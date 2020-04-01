import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import LoginForm from './components/HomePage/HomePage';
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

const Form = () => (
  <LoginForm />
);


const SneakPeak = () => (
  <Browse />
);

const AdminPage = () => (
  <AdminEntry />
 );

const MyLoginForm = (props) => {
      return (
        <LoginForm 
          doesitwork="itworks"
        />
      );
}



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

  render() {
    return (
      <Router>

        <div className="App">

        <header className="App-header">
          <Header loggedInAs={this.state.loggedInAs}/>
        </header>


        <Route exact path="/" component={Form} />
        <Route exact path="/browse" component={SneakPeak} />
        <Route exact path="/admin" component={AdminPage} />

        <header className="App-header">
          <Footer />
        </header>

        </div>

      </Router>
    );
  }
}

export default App;
