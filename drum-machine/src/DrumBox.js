import React, { Component } from 'react';
import Key from './Key';
import Switch from './Switch';

export default class DrumBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      volume: "50",
      letters: [
        {id: 'snare', index: '0', letters: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3'},
        {id: 'bass-1', index: '1', letters: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3'},
        {id: 'bongo', index: '2', letters: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav'},
        {id: 'tom-tom', index: '3', letters: 'A', src: 'http://www.wavlist.com/soundfx/027/tomtom_low.wav'},
        {id: 'bass-3', index: '4', letters: 'S', src: 'http://www.wavlist.com/soundfx/028/bass_guitar3.wav'},
        {id: 'shotgun', index: '5', letters: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav'},
        {id: 'high-hat', index: '6', letters: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav'},
        {id: 'drum-hit', index: '7', letters: 'X', src: 'http://www.wavlist.com/soundfx/027/drum_stick.wav'},
        {id: 'laser', index: '8', letters: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'}
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
    this.changeVolume = this.changeVolume.bind(this);
  }

  

  changeDisplay(input) {
    this.setState({ input });
  }

  changeVolume() {
    let vol = document.getElementById('volume').value;
    this.setState({
      volume: vol,
      input: 'Volume: ' + vol 
    })
    
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
            globalState={this.state}
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
                <input id="volume" type="range" min="0" max="100" step="1" onChange={this.changeVolume} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
