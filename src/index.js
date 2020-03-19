import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from './App';

import * as serviceWorker from './serviceWorker';

import Header from "./header";
import Footer from "./footer";



const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>

      <header className="App-footer">
        <Footer />
      </header>

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

//actDOM.render(<App />, 
//eader />,
//cument.getElementById('root'),
//ooter />
//

// Found this to print out without using the app, which isnt the point.
//ReactDOM.render(
//  <h1>Hello Ron Swanson</h1>,
//  document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
