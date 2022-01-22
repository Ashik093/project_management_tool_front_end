import React, { Component } from 'react'
import Card from '../share/Card'
import { connect } from 'react-redux';
import dashboard from '../data/store/action/dashboard';


class Dashboard extends Component {
    componentDidMount=()=>{
        this.props.dashboardAction(this.props.history)
    }
    render() {
        return (
            <div className="mt-5">
            <div className="warpper-container row">
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h4>Total User</h4>
                        <span className='d-block text-center'>{this.props.dashboard.totalUser}</span>
                    </Card>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h4>Total Active User</h4>
                        <span className='d-block text-center'>{this.props.dashboard.totalActiveUser}</span>
                    </Card>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h4>Total Inactive</h4>
                        <span className='d-block text-center'>{this.props.dashboard.totalInactiveUser}</span>
                    </Card>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h4>Department</h4>
                        <span className='d-block text-center'>{this.props.dashboard.department}</span>
                    </Card>
                </div>
            </div>
        </div>
            
        )
    }
}
const mapStateToProps = state=>{
    return {
        dashboard:state.dashboard,
    };
  }
const mapDispatchToProps = dispatch=>{
    return {
      dashboardAction: (history)=>{
          dispatch(dashboard(history))
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);