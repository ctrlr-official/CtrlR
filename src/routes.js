import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import CyberCrime from './Components/CyberCrime/CyberCrime'
import Statistics from './Components/Statistics/Statistics'
import Warnings from './Components/Warnings/Warnings'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function Routes() {
  return (
      <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cybercrime' exact component={CyberCrime} />
            <Route path='/warnings' exact component={Warnings} />
            <Route path='/statistics' exact component={Statistics} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            </Switch>
  );
}

export default Routes;
