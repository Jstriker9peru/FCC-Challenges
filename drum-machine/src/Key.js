import React, { Component } from 'react';

export default class Key extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //     document.body.addEventListener('keydown', (e) => console.log(e));
    //     window.focus();
    //   }

    // componentWillUnmount() {
    //     document.body.removeEventListener('keydown', this.handleKeyDown);
    // }
    
    handleKeyDown = e => {
        console.log(1);
        console.log(e);
        console.log(this);
        if (e.keyCode === this.props.value.charCodeAt() && this.props.power) {
            // document.getElementById(this.props.value).style.background = 'gold';
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.changeDisplay(this.props.id)
        }
    }

    handleClick = () => {
        console.log(this)
        if (this.props.power) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.changeDisplay(this.props.id);
        }
    }  

    render() {
        return (
            <div className="key" id={this.props.id} onClick={this.handleClick} onKeyDown={e => this.handleKeyDown(e)} tabIndex={this.props.index}>
                <h1>{this.props.value}</h1>
                <audio
                    className="clip"
                    src={this.props.src}
                    ref={ref => this.audio = ref}
                ></audio>
            </div>
        )
    }
}
