import React, { Component } from 'react';
import './App.scss';
import Button from './Button.js';

/* eslint no-eval: 0 */

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
                name: '*',
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
        logic: '',
        output: '0'
    }
    this.handleClick = this.handleClick.bind(this);
    this.evaluator = this.evaluator.bind(this);
  }

  handleClick(name) {
    let lowerName = name.toLowerCase();
    let { output, logic } = this.state;
    switch(name) {
      case 'AC':
        this.setState({
          logic: '',
          output: '0'
        });
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        let operators = ['+', '-', '/', '*'];
        if (operators.includes(logic[(logic.length - 1)])) {
          let newLogic = logic.slice(0, (logic.length - 1));
          this.setState({
            logic: newLogic + ' ' + lowerName,
            output: lowerName
          });
        } else if (logic.includes('=')) {
          let afterLogic = logic.split(' ');
          console.log('this is it');
          console.log(afterLogic);

          this.setState({
            logic: afterLogic[afterLogic.length - 1]  + ' ' + lowerName,
            output: lowerName
          });

        } else {
          this.setState({
            logic: logic + ' ' + lowerName,
            output: lowerName
          });
        }
        break;
      case '=':
        this.setState({
          logic: logic + ' ' + lowerName + ' ' + this.evaluator(),
          output: this.evaluator()
        });
        break;    
      default:
        let operator = ['+', '-', '/', '*'];
        if (output === '0') {
          this.setState({
            logic: lowerName,
            output: lowerName  
          })
        } else if (operator.includes(logic[(logic.length - 1)])) {
          this.setState({
            logic: logic + ' ' + lowerName,
            output: lowerName
          })

        } else {
          this.setState({
            logic: logic + lowerName,
            output: output + lowerName
          })
        }
    } 
  }

  evaluator() {
    let newArray = this.state.logic.split(' ');
    console.log(newArray);
    let output = eval(this.state.logic);
    return output;
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
              {this.state.buttons.map((el, index) => 
              <Button
                key={index}
                buttonName={el.name}
                buttonId={el.id}
                handleClick={this.handleClick}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
