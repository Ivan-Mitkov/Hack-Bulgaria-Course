import React, { Component } from "react";
import data from "./data.json";
import classes from "./App.module.css";
import Grid from "./components/grid/Grid";

class App extends Component {
  state = {
    data: data,
    res: "",
    light: false
  };
  onOfLightHandler = () => {
    // this.setState({ light: !this.state.light });
    this.setState((state)=> {return state.light= !this.state.light} );
  };
  onScreenHandler = elem => {
    if (this.state.light) {
      this.setState({ res: this.state.res + " " + elem });
    }
  };
  render() {
    // console.log(this.state.data.keys);
    let lightCss = classes.smallDot;
    if (this.state.light) {
      lightCss += " " + classes.lightOn;
    }
    let onScreen = "";
    if (this.state.res) {
      onScreen = this.state.res;
    }
    return (
      <div className={classes.container}>
        <div className={classes.screen}>{onScreen}</div>
        <div className={classes.light}>
          <div className={classes.bigDot}>
            <span className={lightCss}> </span>
          </div>
          <div className={classes.num}>Num Lock</div>
        </div>
        <Grid
          data={this.state.data.keys}
          click={this.onScreenHandler}
          numLock={this.onOfLightHandler} 
         
        />
      </div>
    );
  }
}

export default App;
