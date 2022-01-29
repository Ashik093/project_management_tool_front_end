import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../data/store/action/logout';
import { Rings } from  'react-loader-spinner'

class Logout extends Component {
    componentDidMount=()=>{
        this.props.logoutAction(this.props.history)
    }
  render() {
    return <div className="d-flex align-items-center justify-content-center my-auto">
        <Rings ariaLabel="loading-indicator" width="800" height="300"/>
    </div>;
  }
}
const mapDispatchToProps = dispatch=>{
    return {
      logoutAction: (history)=>{
          dispatch(logout(history))
        }
    }
  }
export default connect(null,mapDispatchToProps)(Logout);