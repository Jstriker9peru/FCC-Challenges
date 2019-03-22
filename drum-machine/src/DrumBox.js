import React, { Component } from 'react';
import Key from './Key';
import Switch from './Switch';

export default class DrumBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      letters: [
        {id: 'snare', index: '1', letters: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3'},
        {id: 'bass 1', index: '2', letters: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3'},
        {id: 'bongo', index: '3', letters: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav'},
        {id: 'tom tom', index: '4', letters: 'A', src: 'http://www.wavlist.com/soundfx/027/tomtom_low.wav'},
        {id: 'bass 3', index: '5', letters: 'S', src: 'http://www.wavlist.com/soundfx/028/bass_guitar3.wav'},
        {id: 'shotgun', index: '6', letters: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav'},
        {id: 'high hat', index: '7', letters: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav'},
        {id: 'drum hit', index: '8', letters: 'X', src: 'http://www.wavlist.com/soundfx/027/drum_stick.wav'},
        {id: 'laser', index: '9', letters: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'}
      ],
      // letters: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      switches: {
        Power: {
          name: 'Power',
          on: true
        },
        Bank: {
          name: "Bank",
          on: true
        }
      }
    }
    this.changeDisplay = this.changeDisplay.bind(this);
    this.alternateSwitch = this.alternateSwitch.bind(this);
  }

  

  changeDisplay(input) {
    this.setState({ input });
  }
  

  alternateSwitch(name) {
    this.setState(prevState => ({
      switches: {
        ...prevState.switches,
        [name]: {
          ...prevState.switches[name],
          on: !this.state.switches[name].on
        }
      }
    }))

    let floats = document.getElementById(name);
      
    if (this.state.switches[name].on === true) {
        floats.style.cssFloat = "left";
        this.setState({
          input: ''
        })
    } else {
        floats.style.cssFloat = "right";
    }
  }

  render() {
    return (
      <div className="container">
        <div className="drum-container">
          <div className="key-container">
            {this.state.letters.map(item => 
            <Key 
            key={item.letters} 
            value={item.letters}
            id={item.id}
            src={item.src}
            changeDisplay={this.changeDisplay}
            power={this.state.switches.Power.on}
            index={item.index}
             />)}
          </div>
          <div className="controls-container">
            <div className="switches">
              {Object.keys(this.state.switches).map(item => 
              <Switch 
              key={item} 
              value={item} 
              globalState={this.state}
              altSwitch={this.alternateSwitch}
              />)}
            </div>
            <div className="display">{this.state.input}</div>
            <div className="slider">
                <input type="range" min="0" max="100" step="1" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
