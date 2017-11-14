import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'redux-zero/react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Center from 'react-center';
import {PlanetList} from './PlanetList';
import {search} from './actions';


const App =({items})=> {
  const planetary = items.map((planet, index) => {
    return(
      <li key={index}>
        <PlanetList name={planet.name} dens={planet.dens} />
      </li>
    );
  })
  search();
  return (
    <Center>
    <div>
    <div className="header">
      <h1>Exoplanet Explorer</h1>
      <p>Lean more about planets around other starts! </p>
   </div>
   <div>{ items.length!=0 ? 
      <ul>{planetary}</ul>
          :
      <br/>
      }
  </div>
 
  </div>
  </Center>);
}

  const mapToProps = ({ items }) => ({items});
  export default connect(mapToProps)(App)