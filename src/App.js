import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import {SingIn} from './SingIn';
// import {SingUp} from './SingUp';
// import {BoardTrello} from './BoardTrello';
import { connect } from 'redux-zero/react';

const App =({})=> {
return (
 <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/" render={() => <App />} /> 
        <Route exact path="/" render={() => <App />} />
        <Route exact path="/" render={() => <App />} />
        <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
</BrowserRouter> 

)
}
/* <SingUp/> */
const mapToProps = ({  }) => ({
     
 });
 export default connect(mapToProps)(App);

