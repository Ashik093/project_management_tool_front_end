import React, { Component } from 'react'
import SideMenuItem from '../share/SideMenuItem'

export default class SideBar extends Component {

    state={
        menus:[
            {
                name:"Dashboard",
                link:"/admin/dashboard",
                icon:"fas fa-tachometer-alt"
            },
            {
                name:"User",
                link:"/admin/user",
                icon:"fas fa-user"
            },
            {
                name:"Employee",
                link:"/admin/emplyee",
                icon:"fas fa-user-tie"
            },
            {
                name:"Leave",
                link:"/admin/leave",
                icon:"fas fa-clipboard-list"

            },
            {
                name:"Holiday",
                link:"/admin/holiday",
                icon:"fas fa-calendar-week"
            },
            {
                name:"Resource Calendar",
                link:"/admin/leave/holiday",
                icon:"fas fa-calendar-alt"

            },
            {
                name:"Company",
                link:"/admin/leave/holiday",
                icon:"fas fa-building"
            },
            {
                name:"Cleint",
                link:"/admin/leave/holiday",
                icon:"fas fa-portrait"

            },
            {
                name:"Project Management",
                link:"/admin/datagrid",
                icon:"fas fa-tasks"

            },
            {
                name:"Approval",
                link:"/admin/datagrid",
                icon:"fas fa-calendar-check"

            }
            ,
            {
                name:"System Setting",
                link:"/admin/datagrid",
                icon:"fas fa-cog"

            }
        ]
    }
    render() {
        const {toogle} = this.props
        return (
            <div className="width-25 position-fixed" style={toogle?{display:'block',zIndex: '100'}:{display:'none'}}>
                <div className="shadow pt-2 pb-2 bg-white rounded w-100 vh-100">
                    { this.state.menus.map(item=>
                        <SideMenuItem key={item.name} menu={item}></SideMenuItem>
                    ) }
                </div> 
            </div>
        )
    }
}
