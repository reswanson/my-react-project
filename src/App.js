import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RegisterUserForm from './Form/RegisterUserForm'
import ParentComponent from './parentcomponent'


function App() {
  return (
    <div className="App">
      <header className="App-banner">
        <p>
          Welcome to Rons Bookstore
        </p>
      </header>
      <RegisterUserForm />
      <ParentComponent />

    </div>

  );
}

export default App;
