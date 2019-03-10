import React from "react";
import "./App.css";
import Table from "./components/table/Table";

class App extends React.Component {
  state = {
    data: null
  };
  handleFileSelect = event => {
    const file = event.target.files[0];

    console.log("File name: ", file.name);
    console.log("File type ", file.type);

    const reader = new FileReader();

    reader.onload = onLoadEvent => {
      // This is the parsed file, represented as string
      this.setState(prevState => ({
        data: JSON.parse(onLoadEvent.target.result)
      }));
      console.log("Result", onLoadEvent.target.result);
      console.log("state ", this.state.data);
    };

    reader.readAsText(file);
  };

  render() {
    // let table = null;
    // if (this.state.data) {
    //   table = (
    //     <Table rows={this.state.data.data} head={this.state.data.headers} />
    //   );
    // }
  
    return (
      <div className="App">
        <input type="file" onChange={this.handleFileSelect} />
        {this.state.data &&  <Table rows={this.state.data.data} head={this.state.data.headers} />}
      </div>
    );
  }
}

export default App;
