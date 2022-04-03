import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllDepartment from '../../data/store/action/getAllDepartment';
import Tools from '../../common/Tools';
import DataTable from '../../common/DataTable';
import Modal from '../../common/Modal';

class Index extends Component {
    state={
        shouldCallUpdate:false,
        module:'department',
        tools:{
            name:"Department",
            feature:[
                {icon:"fas fa-plus mt-1",name:"New",id:"#new"},
                {icon:"fas fa-trash mt-1",name:"Delete",id:"#delete"},
                {icon:"fas fa-plus mt-1",name:"Edit",id:"#edit"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#view"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#excel"},
                {icon:"fas fa-plus mt-1",name:"New",id:"#pdf"},
            ]
        },
        toolNew:{
            title:"New",
            id:"new"
        },
        toolEdit:{
            title:"Edit",
            id:"edit"
        },
        form:[
            {
                type:'text',
                label:'Code',
                name:'code',
                id:'code',
                position:'left',
                
            },
            {
                type:'Name',
                label:'Name',
                name:'name',
                id:'name',
                position:'right',
                
            }
        ],
        editForm:[],
        editFormData:{},
        table:[
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
                headerCell:"Code",
                dataKey:"code",
                sortAble:true,
                resizeAble:true,
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
    }
    componentDidMount=()=>{
        this.props.getAllDepartmentAction(this.props.history)
        this.setState({department:this.props.allDepartment.data})
    }
    componentDidUpdate(){
        
        if(this.state.shouldCallUpdate){
            this.setState({shouldCallUpdate:false})
            this.props.getAllDepartmentAction(this.props.history)
            
        }
    }
    updateShouldCallUpdate=(value)=>{
        this.setState({shouldCallUpdate:value})
    }
    changeFormStateForEdit=(value,callback)=>{
        let updatedForm=[
            {
                type:'hidden',
                label:'',
                name:'action',
                id:'action',
                position:'hidden',
                value:'update'
            },
            {
                type:'hidden',
                label:'',
                name:'id',
                id:'id',
                position:'hidden',
                value:value.id
            },
            {
                type:'text',
                label:'Code',
                name:'code',
                id:'code',
                position:'left',
                value:value.code
            },
            {
                type:'Name',
                label:'Name',
                name:'name',
                id:'name',
                position:'right',
                value:value.name
                
            }
        ];
        this.setState({editForm:updatedForm})
        this.setState({editFormData:value})
        callback(true)
    }
    
  render() {
      let department = this.props.allDepartment.data
    return (
        <div className="mt-3">
            <div className="warpper-container">
            
                <Tools name={this.state.tools.name} feature={this.state.tools.feature}/>
                <Modal module={this.state.module} shouldCallUpdate={this.updateShouldCallUpdate} customHistory={this.props.history} toolNew={this.state.toolNew} toolEdit={this.state.toolEdit} formToPassModal={this.state.form} editFormToPassModal={this.state.editForm} editFormData={this.state.editFormData}/>
                <DataTable toolEdit={this.state.toolEdit} module={this.state.module} shouldCallUpdate={this.updateShouldCallUpdate} customHistory={this.props.history} data={department} tableProperty={this.state.table} changeFormStateForEdit={this.changeFormStateForEdit}/>
            </div>        
        </div>
    )
  }
}
const mapStateToProps = state=>{
    return {
        allDepartment: state.allDepartment
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        getAllDepartmentAction:(history)=>{
            dispatch(getAllDepartment(history))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)
