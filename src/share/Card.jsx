import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card mb-4 shadow-sm">
                <div class="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
