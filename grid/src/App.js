import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid/Grid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid rows={5} cols={8}/>
      </div>
    );
  }
}

export default App;
