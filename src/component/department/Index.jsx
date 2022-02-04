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
        form:[
            {
                type:'text',
                label:'Code',
                name:'code',
                id:'code',
                position:'left'
            },
            {
                type:'Name',
                label:'Name',
                name:'name',
                id:'name',
                position:'right'
            }
        ],
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
  render() {
      let department = this.props.allDepartment.data
    return (
        <div className="mt-3">
            <div className="warpper-container">
            
                <Tools name={this.state.tools.name} feature={this.state.tools.feature}/>
                <Modal module={this.state.module} shouldCallUpdate={this.updateShouldCallUpdate} customHistory={this.props.history} toolNew={this.state.toolNew} formToPassModal={this.state.form}/>
                <DataTable shouldCallUpdate={this.updateShouldCallUpdate} customHistory={this.props.history} data={department} tableProperty={this.state.table}/>
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
