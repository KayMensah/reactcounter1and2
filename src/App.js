import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = { number: 0};
  }
  addOne = () => {
    this.setState({number: this.state.number + 1});
  }

  minusOne = () => {
    this.setState({number: this.state.number - 1});
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.number}</h1>
        <button onClick={this.addOne}>Add 1</button>
        <button onClick={this.minusOne}>Minus 1</button>

      </div>
    )


 
  }
}

export default App;
