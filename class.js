import React, { Component } from 'react';

class Increase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  incrementNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  };

  dec = () => {
    this.setState(prevState => ({
      number: prevState.number - 1
    }));
  };

  render() {
    return (
      <div>
        <p>Class Component </p>
        <h3>Current Number: {this.state.number}</h3>
        <button onClick={this.incrementNumber}>Increase Number</button>
        <button onClick={this. dec}> Decrease Number </button>
      </div>
    );
  }
}

export default Increase;
