import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import { Slide } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
{/*         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <Button variant="raised" color="default">
          React按钮
        </Button>
      </div>
    );
  }
}

export default App;
