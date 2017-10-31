import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicChart from './components/DynamicChart.jsx';

class App extends Component{
  render(){
    return(
    <DynamicChart></DynamicChart>
    );
  }
}

export default App;