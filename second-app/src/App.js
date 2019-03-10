import React, { Component } from "react";
import "./App.css";
import "./Btn.css";
import Button from "./Button";
import { generateRandomArray } from "./randomArray";

class App extends Component {
  state = {
    nd: generateRandomArray(8),
    highScore: 0
  };

  findSum = (first, sec) => {
    if (this.state.nd.sum === first + sec) {
      this.setState(prevState => {
        return { highScore: prevState.highScore + this.state.nd.sum };
      });
      this.setState({ nd: generateRandomArray(8) });
    } else {
      this.setState({ highScore: 0 });
      alert("Wrong, Wrong, Wrong HAHAHAHA");
      this.setState({ nd: generateRandomArray(8) });
    }
  };

  render() {
    return (
      <div className="App">
        <div >
          High Score:
          <span>{this.state.highScore}</span>
        </div>
        <div>{this.state.nd.sum}</div>
        <div className="ButtonDiv">
          {this.state.nd.array.map((elem, index) => {
            if (index % 2 === 0) {
              return (
                <Button
                  className="Btn"
                  key={index}
                  clicked={() =>
                    this.findSum(
                      this.state.nd.array[index],
                      this.state.nd.array[index + 1]
                    )
                  }
                >
                  {this.state.nd.array[index]} +{" "}
                  {this.state.nd.array[index + 1]}
                </Button>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
