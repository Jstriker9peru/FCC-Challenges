import React, { Component } from 'react';
import './App.scss';
import Button from './Button.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        buttons: [
            {
                id: 'button1',
                name: 'AC',
            },
            {
                id: 'button2',
                name: '/',
            },
            {
                id: 'button3',
                name: 'X',
            },
            {
                id: 'button4',
                name: '7',
            },
            {
                id: 'button5',
                name: '8',
            },
            {
                id: 'button6',
                name: '9',
            },
            {
                id: 'button7',
                name: '-',
            },
            {
                id: 'button8',
                name: '4',
            },
            {
                id: 'button9',
                name: '5',
            },
            {
                id: 'button10',
                name: '6',
            },
            {
                id: 'button11',
                name: '+',
            },
            {
                id: 'button12',
                name: '1',
            },
            {
                id: 'button13',
                name: '2',
            },
            {
                id: 'button14',
                name: '3',
            },
            {
                id: 'button15',
                name: '=',
            },
            {
                id: 'button16',
                name: '0',
            },
            {
                id: 'button17',
                name: '.',
            }
        ],
        logic: '123',
        output: '456'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="key-container">
            <div className="output-container">
              <div className="logic">{this.state.logic}</div>
              <div className="output">{this.state.output}</div>
            </div>
            <div className="button-container">
              {this.state.buttons.map((el) => 
              <Button
                buttonName={el.name}
                buttonId={el.id}
              />
               )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
