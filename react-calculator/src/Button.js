import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
      super(props)
      this.state = {
          hello: ''
      }
  }  
  render() {
    return (
      <button id={this.props.buttonId}>
        <div className="name">{this.props.buttonName}</div>
      </button>
    )
  }
}

