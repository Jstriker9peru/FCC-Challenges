import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      timerStopped: true,
      sessionOn: true,
      breakOn: false,
      minutes: 0,
      seconds: 0,
      breakMin: 5,
      breakSec: 0,
      sessionMin: 25,
      sessionSec: 0
    }
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handleTimerStop = this.handleTimerStop.bind(this);
    this.handleTimerRestart = this.handleTimerRestart.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }
  componentWillMount() {
    this.handleTimerRestart();
    
  }

  componentDidMount() {
    let sessionBox = document.getElementsByClassName('box2');
    let breakBox = document.getElementsByClassName('box1');

    this.state.sessionOn ? 
    sessionBox[0].style.border = "3px solid gold" : sessionBox[0].style.border = '1px solid black';

    this.state.breakOn ?
    breakBox[0].style.border = "3px solid gold" : breakBox[0].style.border = '1px solid black';
  }

  handleSwitch() {    
    this.setState((prevState) => ({
      sessionOn: !prevState.sessionOn,
      breakOn: !prevState.breakOn,
      timerStarted: false,
      timerStopped: true,
    }));
    setTimeout(() => {
      this.handleTimerRestart();
      let sessionBox = document.getElementsByClassName('box2');
      let breakBox = document.getElementsByClassName('box1');
      this.state.sessionOn ? sessionBox[0].style.border = "3px solid gold" : sessionBox[0].style.border = '1px solid black';
      this.state.breakOn ? breakBox[0].style.border = "3px solid gold" : breakBox[0].style.border = '1px solid black';
    }, 1);


  }

  handleTimerStart() {
    if (this.state.sessionOn) {

    }
    if (this.state.timerStopped) {
      this.timer = setInterval(() => {
          this.setState({
            timerStarted: true,
            timerStopped: false,
          });

          if (this.state.timerStarted) {
            if (this.state.seconds <= 0) {
              this.setState((prevState) => ({
                minutes: prevState.minutes - 1,
                seconds: 60
              }));
            };

            this.setState((prevState) => ({
              seconds: prevState.seconds - 1
            }));
            if (this.state.minutes === 0 &&
              this.state.seconds === 0) {
                this.audioBeep.play();

                clearInterval(this.timer);
                setTimeout(() => {
                  this.audioBeep.pause();
                  this.audioBeep.load();
                  this.handleSwitch();      
                  this.handleTimerStart();
                }, 1000);
            }
          }
      }, 100);
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

  handleTimerRestart() {
    let counter = 0;
    if (counter > 0) {
      this.audioBeep.pause();
      this.audioBeep.load();
    }
    counter += 1;
    if (this.state.sessionOn) {

      this.setState({
        seconds: this.state.sessionSec,
        minutes: this.state.sessionMin
      });
    } else if (this.state.breakOn) {

      this.setState({
        seconds: this.state.breakSec,
        minutes: this.state.breakMin
      });
    }
  }

  handleIncrement(type) {
    if (this.state.timerStopped) {
      if (this.state.sessionOn && type === 'sess') {
        if (this.state.sessionMin <= 59) {

          this.handleTimerRestart();
          this.setState((prevState) => ({
            sessionMin: prevState.sessionMin + 1,
            minutes: prevState.minutes + 1
          }));
        }
        
      } else if (this.state.breakOn && type === 'break') {
          if (this.state.breakMin <= 59) {
            this.handleTimerRestart();
            this.setState((prevState) => ({
              breakMin: prevState.breakMin + 1, 
              minutes: prevState.minutes + 1
            }));
          }
        }
    } else {


      if (this.state.sessionOn && type === 'sess') {
        if (this.state.sessionMin <= 59) {

          this.setState((prevState) => ({
            sessionMin: prevState.sessionMin + 1
          }));
        }
        
      } else if (this.state.breakOn && type === 'break') {
          if (this.state.breakMin <= 59) {
            this.setState((prevState) => ({
              breakMin: prevState.breakMin + 1
            }));
          }
        }
    }

  }

  handleDecrement(type) {
    if (this.state.timerStopped) {
      if (this.state.sessionOn && type === 'sess') {
        if (this.state.sessionMin >= 2) {
          this.handleTimerRestart();
          this.setState((prevState) => ({
            sessionMin: prevState.sessionMin - 1,
            minutes: prevState.minutes - 1 
          }))
        }
      } else if (this.state.breakOn && type === 'break') {
        if (this.state.breakMin >= 2) {
          this.handleTimerRestart();
          this.setState((prevState) => ({
            breakMin: prevState.breakMin - 1,
            minutes: prevState.minutes - 1 
          }))
        }
      }
    } else {

      if (this.state.sessionOn && type === 'sess') {
        if (this.state.sessionMin >= 2) {
          this.setState((prevState) => ({
            sessionMin: prevState.sessionMin - 1
          }))
        }
      } else if (this.state.breakOn && type === 'break') {
        if (this.state.breakMin >= 2) {
          this.setState((prevState) => ({
            breakMin: prevState.breakMin - 1
          }))
        }
      }
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
                <i id="break-decrement" className="fas fa-arrow-down" onClick={() => this.handleDecrement('break')}></i>
                <h3 id="break-length">{this.state.breakMin}</h3>
                <i id="break-increment" className="fas fa-arrow-up" onClick={() => this.handleIncrement('break')}></i>
              </div>
            </div>
            <div className="box2">
              <h2 id="session-label">Session Length</h2>
              <div className="change">
                <i id="session-decrement" className="fas fa-arrow-down" onClick={() => this.handleDecrement('sess')}></i>
                <h3 id="session-length">{this.state.sessionMin}</h3>
                <i id="session-increment" className="fas fa-arrow-up" onClick={() => this.handleIncrement('sess')}></i>
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="timer-container">
              <div className="top">
                <h2 id="timer-label">
                  {this.state.sessionOn ? 'Session' : ''}
                  {this.state.breakOn ? 'Break' : ''}
                </h2>
              </div>
              <div className="bottom">
                <h2 id="time-left">
                  {this.state.minutes < 10 ? 0 : ''}
                  {this.state.minutes}
                  <span className="colon">:</span>
                  {this.state.seconds < 10 ? 0 : ''}
                  {this.state.seconds}
                </h2>
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="icon-container">

              <span title="start">
                <i 
                id="start_stop" 
                className="fas fa-play-circle" 
                onClick={this.handleTimerStart}></i>
              </span>
              <span title="stop">
                <i 
                className="fas fa-pause-circle" 
                onClick={this.handleTimerStop}></i>
              </span>
              <span title="reset">
                <i 
                id="reset" 
                className="fas fa-sync-alt" 
                onClick={this.handleTimerRestart}></i> 
              </span>
              <span title="switch">
                <i className="fas fa-exchange-alt" onClick={this.handleSwitch}></i>
              </span>
              <audio 
              id="beep"
              preload="auto" 
              src="https://goo.gl/65cBl1"
              ref={(audio) => { this.audioBeep = audio; }} />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
