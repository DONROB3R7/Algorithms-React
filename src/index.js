import React from "react";
import ReactDOM from "react-dom";
import Logic from "./Component/Logic";
import "./styles.css";

//FizzBuzz

// if the number it's divizible by 3 => fizzz
// if the number it's divizible by 5 => buzz
// if the number it's divizible by 5 and 3 => fizzBuzz

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeSelected: "",
      show: false,
      algorithmsType: [
        {
          name: "",
          type: "empty"
        },
        {
          name: "Fizz Buzz",
          type: "fizzBuzz"
        }
      ]
    };
  }

  _handleChange = event => {
    this.setState({ typeSelected: event.target.value });
    this.algorithmsLogic(event.target.value);
  };

  getOptions() {
    const algorithmsType = this.state.algorithmsType;
    return algorithmsType.map((type, i) => (
      <option key={i} value={type.type}>
        {type.name}
      </option>
    ));
  }

  algorithmsLogic(typeSelected) {
    this.setState({ show: typeSelected === "empty" ? false : true });
  }

  render() {
    return (
      <div>
        <h1>Algorithms in React </h1>
        <h4>
          You selected{" "}
          {this.state.typeSelected === "empty" ? "" : this.state.typeSelected}
        </h4>
        <select onChange={this._handleChange}>{this.getOptions()}</select>
        <Logic show={this.state.show} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);