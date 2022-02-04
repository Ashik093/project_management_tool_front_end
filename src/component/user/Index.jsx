import React, { Component } from 'react'
import Menu from '../../common/Menu';
import Modal from '../../common/Modal';
import Summury from '../../common/Summury';
import DataTable from '../../common/DataTable';
import Tools from '../../common/Tools';
import { connect } from 'react-redux';
import getAllUser from '../../data/store/action/getAllUser';


class Index extends Component {
    state={
        shouldCallUpdate:false,
        active:"All User",
        module:'user',
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
        user:[],
        userRole:[
            { id: 1, name: 'role', email: 'a@email.com', avartar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            
        ],
        summury:[],
        userFrom:[
            {
                type:'text',
                label:'Name',
                name:'name',
                id:'name',
                position:'left'
            },
            {
                type:'email',
                label:'Email',
                name:'email',
                id:'email',
                position:'right'
            },
            {
                type:'text',
                label:'Phone',
                name:'phone',
                id:'phone',
                position:'left'
            },
            {
                type:'text',
                label:'User Name',
                name:'user_name',
                id:'user_name',
                position:'right'
            },
            {
                type:'text',
                label:'Address',
                name:'address',
                id:'address',
                position:'left'
            },
            {
                type:'password',
                label:'Password',
                name:'password',
                id:'password',
                position:'right'
            },
            {
                type:'dropdown',
                label:'Geneder',
                name:'gender',
                id:'gender',
                position:'left',
                'option':[
                    {
                        'value':null,
                        'name':'Select Geneder'
                    },
                    {
                        'value':'Male',
                        'name':'Male'
                    },
                    {
                        'value':'Female',
                        'name':'Female'
                    }
                ]
            },
            {
                type:'dropdown',
                label:'Status',
                name:'status',
                id:'status',
                position:'right',
                'option':[
                    {
                        'value':null,
                        'name':'Select Status'
                    },
                    {
                        'value':'1',
                        'name':'Active'
                    },
                    {
                        'value':'0',
                        'name':'Inactive'
                    }
                ]
            },
            {
                type:'dropdown',
                label:'Role',
                name:'role_id',
                id:'role_id',
                position:'left',
                'option':[
                    {
                        'value':null,
                        'name':'Select Role'
                    },
                    {
                        'value':'1',
                        'name':'Super Admin'
                    },
                    {
                        'value':'0',
                        'name':'Admin'
                    }
                ]
            },
            {
                type:'dropdown',
                label:'Department',
                name:'department_id',
                id:'department_id',
                position:'right',
                'option':[
                    {
                        'value':null,
                        'name':'Select Department'
                    },
                    {
                        'value':'1',
                        'name':'Research'
                    },
                    {
                        'value':'0',
                        'name':'Development'
                    }
                ]
            },
            {
                type:'file',
                label:'Image',
                name:'image',
                id:'image',
                position:'left'
            },
            
            
        ],
        userRoleFrom:[
            {
                type:'text',
                label:'Role Name',
                name:'name',
                id:'name',
                position:'left'
            }
        ],
        formToPassModal:[],
        userTable:[
            {
                headerCell:"ID",
                dataKey:"id",
                sortAble:true,
                resizeAble:false,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Name",
                dataKey:"name",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"User Name",
                dataKey:"user_name",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Email",
                dataKey:"email",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'email',
                width:100
            },
            {
                headerCell:"Phone",
                dataKey:"phone",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Gender",
                dataKey:"gender",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Address",
                dataKey:"address",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Is Active",
                dataKey:"is_active",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Last Login Ip",
                dataKey:"last_login_ip",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Profile Photo",
                dataKey:"profile_photo",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'image',
                width:80
            }
        ],
        userRoleTable:[
            {
                headerCell:"ID",
                dataKey:"id",
                sortAble:true,
                resizeAble:false,
                fixed:false,
                type:'text',
                width:100
            },
            {
                headerCell:"Name",
                dataKey:"name",
                sortAble:true,
                resizeAble:true,
                fixed:false,
                type:'text',
                width:100
            },
        ],
        tableToPass:[]

    }





    clickHandler=(name)=>{
        this.setState({active:name})
        if(name==='All User'){
            this.setState(prevState=>({
                tools:{
                    ...prevState.tools,
                    name:"User"
                }
            }))
            this.setState({summury:this.state.userSummury})
            this.setState({dataList:this.state.user})
            this.setState({formToPassModal:this.state.userFrom})
            this.setState({tableToPass:this.state.userTable})
        }else if(name==='User Role'){
            this.setState(prevState=>({
                tools:{
                    ...prevState.tools,
                    name:"User Role"
                }
            }))
            this.setState({summury:this.state.userRoleSummury})
            this.setState({formToPassModal:this.state.userRoleFrom})
            this.setState({tableToPass:this.state.userRoleTable})
        }
        
    }
    componentDidMount(){
        
        this.props.getAllUserAction(this.props.history)
        
        this.setState({summury:this.state.userSummury})
        this.setState({formToPassModal:this.state.userFrom})
        this.setState({tableToPass:this.state.userTable})

    }
    componentDidUpdate(){
        if(this.state.shouldCallUpdate){
            this.setState({shouldCallUpdate:false})
            this.props.getAllUserAction(this.props.history)
        }
    }
    updateShouldCallUpdate=(value)=>{
        this.setState({shouldCallUpdate:value})
    }
    
    render() {
        let dataList = this.props.allUser.data
        if(this.state.active === 'All User'){
            dataList = this.props.allUser.data
        }else if(this.state.active === 'User Role'){
            dataList = this.state.userRole
        }
        return (

            <div className="mt-3">
                <div className="warpper-container">
                    <Menu menu={this.state.menu} clickHandler={this.clickHandler} active={this.state.active}/>
                    <Summury summury={this.state.summury}/>
                    <Tools name={this.state.tools.name} feature={this.state.tools.feature}/>
                    <Modal module={this.state.module} shouldCallUpdate={this.updateShouldCallUpdate} customHistory={this.props.history} toolNew={this.state.toolNew} formToPassModal={this.state.formToPassModal}/>
                    <DataTable shouldCallUpdate={this.updateShouldCallUpdate} customHistory={this.props.history} data={dataList} tableProperty={this.state.tableToPass}/>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        allUser: state.allUser
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        getAllUserAction:(history)=>{
            dispatch(getAllUser(history))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)
