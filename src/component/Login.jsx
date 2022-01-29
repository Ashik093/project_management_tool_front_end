import React, { Component } from 'react'
import Card from '../share/Card'
import Button from '../share/Button'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import login from '../data/store/action/login';
import {getToken,isTokenValid} from '../helper/login'
import { Rings } from  'react-loader-spinner'

class Login extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false 
    }
    

    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event,history)=>{
        event.preventDefault()
        if(this.state.email==''){
            this.setState({error:'Email Can Not Empty'})
        }else if(this.state.password==''){
            this.setState({error:'Password Can Not Empty'})
        }else{
            this.setState({loading:true})
            this.setState({error:''})
            this.props.loginAction(this.state,history)
            setTimeout(() => {
                this.setState({loading:false})
            }, 3000);
        }
    }
    componentDidMount=()=>{
        if(getToken() !==null){
            isTokenValid(this.props.history)
        }else{
            this.props.history.push("/");
        }
    }
    
    render() {
        
        return (
            <div className="container" style={{marginTop:"10%"}}>
            
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        
                        <Card>
                            <h3 className="bg-success p-3 text-white text-center">Project Management Tool</h3>
                            
                            <form onSubmit={()=>{this.handleSubmit(event,this.props.history)}}>
                                <div className="text-danger">
                                    {this.state.error}
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control"/>
                                </div>
                                {!this.state.loading && <Button type="submit" classs="btn btn-danger shadow-sm" text="login"></Button>}
                                {this.state.loading && <Rings ariaLabel="loading-indicator" width="500"/>}
                                
                            </form>
                        </Card>
                    </div>
                </div>
                <ToastContainer/>
                
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {
        authenticateUser:state.authenticateUser,
    };
  }
  const mapDispatchToProps = dispatch=>{
    return {
      loginAction: (value,history)=>{
          dispatch(login(value,history))
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Login);
