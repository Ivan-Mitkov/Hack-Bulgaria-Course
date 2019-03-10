import React, { Component } from 'react';
import './App.css';
import Table from './components/table/Table'

class App extends Component {
  // Example Data
state={
  tableData : {
    columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
    rows: [{
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 34,
      'Unit': '1 Hour',
      'Units Requested': 13
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 30,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'foo',
      'Unit': null,
      'Cost/Unit': undefined,
      'Units Requested': 42
    }]}}
 

  render() {
    return (
      <div className="App">
       <Table head={this.state.tableData.columns}  rows={this.state.tableData.rows}></Table>
      </div>
    );
  }
}

export default App;
