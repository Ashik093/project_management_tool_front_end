import React, { Component } from 'react'
import Card from '../share/Card'
import Button from '../share/Button'
import {
    Redirect
} from "react-router-dom";
import Axios from 'axios';
import AppUrl from './../data/api/AppUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class Login extends Component {
    state={
        logged:false,
        email:'',
        password:''

        
    }
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    login=e=>{
        //console.log(AppUrl.test)
        Axios.get(AppUrl.test)
            .then((response)=>{
                console.log(response.data)
                toast.success('Success!',{
                    position: "bottom-center",
                    
                })
            })
            .then((error)=>{

            })

        //this.setState({logged:true})
        //console.log(this.state)
    }
    
    render() {
        
        
        if(this.state.logged){
            return <Redirect to={"/admin"} />   
        }

        return (
            <div className="container" style={{marginTop:"10%"}}>
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Card>
                            <h3 className="bg-success p-3 text-white text-center">Project Management Tool</h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control"/>
                            </div>
                            <Button classs="btn btn-danger shadow-sm" text="login" onclick={this.login}></Button>
                        </Card>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}
