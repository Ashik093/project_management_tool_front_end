import React, { Component } from 'react'


import TopBar from '../common/TopBar';
import SideBar from '../common/SideBar';
import AdminRoute from '../routes/AdminRoute';
import { Fragment } from 'react';

export default class Admin extends Component {
    state={
        toogle:true,
        logged:false,
        width:'width-75',
      }
      toggleSideBar=()=>{
        this.setState({toogle:!this.state.toogle})
        if(this.state.toogle == true){
            this.setState({width:'width-100'})
        }else{
            this.setState({width:'width-75'})
        }
      }
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <TopBar toggleSideBar={this.toggleSideBar}></TopBar>
                    <SideBar toogle={this.state.toogle} ></SideBar>
                    <div className={this.state.width}>
                        <AdminRoute></AdminRoute>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}
