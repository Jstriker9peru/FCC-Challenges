import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      timerStopped: true,
      minutes: 0,
      seconds: 0
    }
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handleTimerStop = this.handleTimerStop.bind(this);
  }

  handleTimerStart() {

    if (this.state.timerStopped) {
      this.timer = setInterval(() => {
          this.setState({
            timerStarted: true,
            timerStopped: false,
          });

          if (this.state.timerStarted) {
            if (this.state.seconds >= 59) {
              this.setState((prevState) => ({
                minutes: prevState.minutes + 1,
                seconds: -1
              }))
            };

            this.setState((prevState) => ({
              seconds: prevState.seconds + 1
            }));
          }
      }, 1000);
    }
  }

  handleTimerStop() {
    if (this.state.timerStarted) {
      this.setState({
        timerStarted: false,
        timerStopped: true,
        seconds: this.state.seconds
      })
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="clock-container">
          <div className="row1">
            <h1>Pomodoro Clock</h1>
          </div>
          <div className="row2">
            <div className="box1">
              <h2 id="break-label">Break Length</h2>
              <div className="change">
                <i id="break-decrement" class="fas fa-arrow-down"></i>
                <h3 id="break-length">5</h3>
                <i id="break-increment" class="fas fa-arrow-up"></i>
              </div>
            </div>
            <div className="box2">
              <h2 id="session-label">Session Length</h2>
              <div className="change">
                <i id="session-decrement" class="fas fa-arrow-down"></i>
                <h3 id="session-length">25</h3>
                <i id="session-increment" class="fas fa-arrow-up"></i>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="timer-container">
              <div className="top">
                <h2 id="timer-label">Break</h2>
              </div>
              <div className="bottom">
                <h2 id="time-left">
                  {this.state.minutes}
                  <span className="colon">:</span>
                  {this.state.seconds}
                </h2>
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="icon-container">
              <i id="start_stop" class="fas fa-play-circle" onClick={this.handleTimerStart}></i>
              <i class="fas fa-pause-circle" onClick={this.handleTimerStop}></i>
              <i id="reset" class="fas fa-sync-alt"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
