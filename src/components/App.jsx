import React from "react";
import css from './app.module.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incg = () => {
    this.setState({ good: this.state.good + 1 });
  };
  incn = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  incb = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  total = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0)
  }
  porcentaje = () => {
    return Math.trunc(this.total() > 0 ?(this.state.good / this.total()) * 100 :0);
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <h2 className={css.title}>Please leave feedback</h2>
        <button type="button" className={css.btn} onClick={this.incg}>
          👍
        </button>
        <button type="button" className={css.btn} onClick={this.incn}>
          🤷
        </button>
        <button type="button" className={css.btn} onClick={this.incb}>
          👎
        </button>
        {this.total() > 0
          ?<>
            <h3>Statistics</h3>
            <p>Good:{good}</p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad}</p>
            <p>Total: {this.total()}</p>
            <p>Porcentaje: {this.porcentaje()}%</p>
          </>
          :<p>There is no feedback</p>
        }
      </div>
    );
  }
}

export const App = () => {
  return (
    <>
      <Counter/>
    </>
  );
};
