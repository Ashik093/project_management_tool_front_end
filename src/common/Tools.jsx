import React, { Component } from 'react'

export default class Tools extends Component {
    render() {
        let {name,feature} = this.props
        return (
            <div className="w-100 mt-3 mb-2">
            <ul class="list-group list-group-horizontal-sm list-group-custom">
                <li class="list-group-item custom-list-group border-bottom shadow-sm">{name}:</li>
                {feature.map(item=>(
                    <li class="list-group-item custom-list-group custom-menu-font border-bottom shadow-sm d-flex" data-toggle="modal" data-target={item.id}><i className={item.icon}></i><span className="ml-2 item-name">{item.name}</span></li>
                ))}
                
                
                </ul>
            </div>
        )
    }
}
