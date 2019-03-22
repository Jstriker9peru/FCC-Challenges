import React from 'react'

export default function Switch(props) {

    function handleSwitch(name) {
        props.altSwitch(name);
    } 

    return (
        <div className="switch-container">
            <h2>
            {props.globalState.switches[props.value].name}</h2>
            <div className="switch">
                <div className="on">ON</div>
                <div className="off">OFF</div>
                <div className="box" id={props.value} onClick={() => handleSwitch(props.value)}></div>
            </div>
        </div>
    )
}
