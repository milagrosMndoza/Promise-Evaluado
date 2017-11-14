import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import {SingIn} from './SingIn';
// import {SingUp} from './SingUp';
// import {BoardTrello} from './BoardTrello';
import { connect } from 'redux-zero/react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
 }
/* <SingUp/> */
// const mapToProps = ({  }) => ({
     
//  });
//  export default connect(mapToProps)(App);

export default App;