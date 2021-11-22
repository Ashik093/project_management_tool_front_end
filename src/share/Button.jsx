import React, { Component } from 'react'

export default class Button extends Component {
    
    render() {
        let {classs,onclick,text} =this.props
        return (
            <button className={classs} onClick={onclick}>{text}</button>
        )
    }
}
