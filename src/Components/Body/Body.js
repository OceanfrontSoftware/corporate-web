import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Platform from './Platform';
import Demo from './Demo';
import About from './About';
import Contact from './Contact';
import './Style.css';

class Body extends Component {
  render() {
    return (
      <div className='body'>
        <div className='container'>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/platform' component={Platform}/>
            <Route exact path='/demo' component={Demo}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>

        </div>
      </div>
    );
  }
}

export default Body;
