import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {

    render() {
        let {menu,active,clickHandler} = this.props
        return (
            <div className="mb-2 w-100">
                <div className="m-auto">
                    <ul className="list-group list-group-horizontal">
                    {menu.map(item=>(
                        <li className={`list-group-item ${active === item.name ? "selected": ""} `} ><Link to={item.link} className="text-decoration-none text-dark text-center text-muted ml-1 side-menu-text" onClick={()=>clickHandler(item.name)}>{item.name}</Link></li>
                    ))}
                        
                        
                       
                    </ul>
                </div>
            </div>
        )
    }
}
