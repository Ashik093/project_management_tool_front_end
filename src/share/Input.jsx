import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        let {label,type,name,placeholder} = this.props.form
        return (
            <div className="form-group">
                <label>{label}</label>
                <input type={type} className="form-control"/>
            </div>
        )
    }
}
