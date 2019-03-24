import React, { Component } from 'react';

export default class Key extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.body.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.body.addEventListener('keyup', (e) => this.handleKeyUp(e));
        window.focus();
      }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
        document.body.removeEventListener('keyup', this.handleKeyUp);
    }
    
    handleKeyDown = e => {

        if (e.keyCode === this.props.value.charCodeAt() && this.props.power) {
            document.getElementById(this.props.id).style.background = "gold";
            document.getElementById(this.props.id).style.boxShadow = "none";
            document.getElementsByClassName('ltr')[this.props.index].style.color = "black";
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.changeDisplay(this.props.id)
        }
    }

    handleKeyUp = e => {
        let boxShadow = "-2px 11px 16px -4px rgba(0,0,0,0.75)"
        if (e.keyCode === this.props.value.charCodeAt() && this.props.power) {
            document.getElementById(this.props.id).style.background = "grey";
            document.getElementById(this.props.id).style.boxShadow = boxShadow;
            document.getElementsByClassName('ltr')[this.props.index].style.color = "white";
           
        }
    }

    handleClick = () => {
        if (this.props.power) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.changeDisplay(this.props.id);
        }
    }  

    render() {
        return (
            <div className="key" id={this.props.id} onClick={this.handleClicdk} onKeyDown={e => this.handleKeyDown(e)} onKeyUp={e => this.handleKeyUp(e)} tabIndex="0" ref={el => this.key = el} >
                <h1 className="ltr">{this.props.value}</h1>
                <audio
                    className="clip"
                    src={this.props.src}
                    ref={ref => this.audio = ref}
                ></audio>
            </div>
        )
    }
}
