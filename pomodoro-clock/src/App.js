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
              <h2>Break Length</h2>
              <div>
                <i class="fas fa-arrow-down"></i>
                <h3>5</h3>
                <i class="fas fa-arrow-up"></i>
              </div>
            </div>
            <div className="box2">
              <h2>Session Length</h2>
              <div>
                <i class="fas fa-arrow-down"></i>
                <h3>25</h3>
                <i class="fas fa-arrow-up"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="timer-container">
              <div><h2>Break</h2></div>
              <div><h2>03:58</h2></div>
            </div>
          </div>
          <div className="row">
            <i class="fas fa-play-circle"></i>
            <i class="fas fa-pause-circle"></i>
            <i class="fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
