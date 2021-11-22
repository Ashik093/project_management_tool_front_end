import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideMenuItem extends Component {

    render() {
        
        return (
            <div className="border-bottom-0 p-2 menu" >
               <i className={this.props.menu.icon}></i> <Link  onClick={()=>{}} to={this.props.menu.link} className="text-decoration-none text-dark text-center text-muted ml-1 side-menu-text">{this.props.menu.name}</Link>
            </div>
        )
    }
}
