import React, { Component } from 'react'

import TopBar from '../common/TopBar';
import SideBar from '../common/SideBar';
import AdminRoute from '../routes/AdminRoute';
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import {getToken} from '../helper/login'

class Admin extends Component {
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
    componentDidMount=()=>{
        if(getToken() === null){
            this.props.history.push("/");
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
                <ToastContainer/>
            </Fragment>
            
        )
    }
}

const mapStateToProps = state=>{
    return {
        authenticateUser:state.authenticateUser,
    };
}
export default connect(mapStateToProps)(Admin)
