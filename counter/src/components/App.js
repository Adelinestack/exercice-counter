import React, { Component } from 'react';

import Title from './Title';
import CreateCounter from './CreateCounter';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [],
    };
  }

  onCreateCounterClick() {
    this.setState({
      counters: [
        {
          id: Date.now(),
          numberOfTasks: 0,
          text: '',
        },
        ...this.state.counters,
      ],
    });
  }

  onTextChange(text, counterId) {
    const counters = this.state.counters.map(counter => {
      return counter.id === counterId
        ? {
            ...counter,
            text,
          }
        : counter;
    });
    this.setState({ counters });
  }

  onPlusClick(counterId) {
    const counters = this.state.counters.map(counter => {
      if (counter.id === counterId) {
        return { id: counterId, numberOfTasks: counter.numberOfTasks + 1 };
      }
      return counter;
    });

    this.setState({
      counters,
    });
  }

  onCrossClick(counterId) {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({
      counters,
    });
  }

  render() {
    const countersList = this.state.counters.map(counter => (
      <div key={counter.id}>
        <div>{counter.numberOfTasks}</div>
        <div>
          <input
            type="text"
            value={counter.text}
            onChange={e => this.onTextChange(e.target.value, counter.id)}
          />
        </div>
        <div>
          <button onClick={() => this.onPlusClick(counter.id)}>+</button>
          <button onClick={() => this.onCrossClick(counter.id)}>x</button>
        </div>
      </div>
    ));

    if (this.state.counters.length > 0) {
      return (
        <div className="App">
          <div className="container">
            <Title />
            <CreateCounter onClick={this.onCreateCounterClick.bind(this)} />
          </div>
          {countersList}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Title />
          <CreateCounter onClick={this.onCreateCounterClick.bind(this)} />
          <div>Please add a counter with the + button at top</div>
        </div>
      );
    }
  }
}

export default App;
