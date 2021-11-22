import React, { Component } from 'react'
import Menu from '../../common/Menu';
import Modal from '../../common/Modal';
import Summury from '../../common/Summury';
import DataTable from '../../common/DataTable';
import Tools from '../../common/Tools';

export default class Index extends Component {
    state={
        active:"All User",
        menu:[
            {
                name:"All User",
                link:"/admin/user"
            },
            {
                name:"User Role",
                link:"/admin/user/role"
            },
            {
                name:"Permission",
                link:"/admin/permission"
            }
        ],
        userSummury:[
            {
                name:"User",
                data:23
            },
            {
                name:"Active",
                data:20
            },
            {
                name:"Disabled",
                data:3
            },
            {
                name:"Leave",
                data:0
            }
        ],
        userRoleSummury:[
            {
                name:"User Role",
                data:23
            },
            {
                name:"Active",
                data:20
            },
            {
                name:"Disabled",
                data:3
            },
            
        ],
        tools:{
            name:"User",
            feature:[
                {icon:"fas fa-plus mt-1",name:"New",id:"#new"},
                {icon:"fas fa-trash mt-1",name:"Delete",id:"#delete"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#edit"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#view"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#excel"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#pdf"},
            ]
        },
        toolNew:{
            title:"New",
            id:"new"
        },
        user:[
            { id: 1, name: 'a', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 2, name: 'b', email: 'b@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 3, name: 'c', email: 'c@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
        ],
        userRole:[
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
        ],
        summury:[],
        dataList:[]
    }
    clickHandler=(name)=>{
        this.setState({active:name})
        if(name==='All User'){
            this.setState({summury:this.state.userSummury})
            this.setState({dataList:this.state.user})
        }else{
            this.setState({summury:this.state.userRoleSummury})
            this.setState({dataList:this.state.userRole})
        }
        
    }
    componentDidMount(){
        this.setState({summury:this.state.userSummury})
        this.setState({dataList:this.state.user})
    }
    render() {

        return (

            <div className="mt-3">
                <div className="warpper-container">
                    <Menu menu={this.state.menu} clickHandler={this.clickHandler} active={this.state.active}/>
                    <Summury summury={this.state.summury}/>
                    <Tools name={this.state.tools.name} feature={this.state.tools.feature}/>
                    <Modal toolNew={this.state.toolNew}/>
                    <DataTable data={this.state.dataList}/>
                </div>
                
            </div>
        )
    }
}
