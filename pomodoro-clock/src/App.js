import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock-container">
          <div><h1>Pomodoro Clock</h1></div>
          <div className="row">
            <div className="box1">
              <h2 id="break-label">Break Length</h2>
              <div>
                <i id="break-decrement" class="fas fa-arrow-down"></i>
                <h3 id="break-length">5</h3>
                <i id="break-increment" class="fas fa-arrow-up"></i>
              </div>
            </div>
            <div className="box2">
              <h2 id="session-label">Session Length</h2>
              <div>
                <i id="session-decrement" class="fas fa-arrow-down"></i>
                <h3 id="session-length">25</h3>
                <i id="session-increment" class="fas fa-arrow-up"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="timer-container">
              <div>
                <h2 id="timer-label">Break</h2>
              </div>
              <div><h2 id="time-left">03:58</h2></div>
            </div>
          </div>
          <div className="row">
            <i id="start_stop" class="fas fa-play-circle"></i>
            <i class="fas fa-pause-circle"></i>
            <i id="reset" class="fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
