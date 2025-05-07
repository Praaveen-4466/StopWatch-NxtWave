import React, { Component } from "react";

import "./index.css";

class StopWatchHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timeLeftInSeconds: 0,
    };
  }

  onStartButton = () => {
    if (!this.state.isRunning) {
      this.timerId = setInterval(this.tick, 1000);
      this.setState({ isRunning: true });
    }
  };

  onResetButton = () => {
    clearInterval(this.timerId);
    this.setState({ isRunning: false, timeLeftInSeconds: 0 });
  };

  onStopButton = () => {
    clearInterval(this.timerId);
    this.setState({ isRunning: false });
  };

  tick = () => {
    const { timeLeftInSeconds } = this.state;
    this.setState((prevState) => ({
      timeLeftInSeconds: prevState.timeLeftInSeconds + 1,
    }));
  };

  formatMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  };

  formatSeconds = (seconds) => {
    const secs = seconds % 60;
    return secs < 10 ? `0${secs}` : `${secs}`;
  };

  render() {
    const { isRunning, timeLeftInSeconds } = this.state;
    const time = `${this.formatMinutes(
      timeLeftInSeconds
    )} : ${this.formatSeconds(timeLeftInSeconds)}`;
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-container">
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="img"
              alt="stopwatch"
            />
            <h1 className="header">Timer</h1>
          </div>
          <p className="paragraph">{time}</p>
          <div className="btn-container">
            <button className="start" onClick={this.onStartButton}>
              Start
            </button>
            <button className="stop" onClick={this.onStopButton}>
              Stop
            </button>
            <button className="reset" onClick={this.onResetButton}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StopWatchHomePage;
