import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../data/store/action/logout';

class Logout extends Component {
    componentDidMount=()=>{
        this.props.logoutAction(this.props.history)
    }
  render() {
    return <div></div>;
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