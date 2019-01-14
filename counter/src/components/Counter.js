import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfTasks: 0,
    };
  }

  onPlusClick() {
    this.setState({
      numberOfTasks: this.state.numberOfTasks + 1,
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.numberOfTasks}</div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button onClick={this.onPlusClick.bind(this)}>+</button>
          <button>x</button>
        </div>
      </div>
    );
  }
}

export default Counter;
