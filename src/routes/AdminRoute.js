import React, { Component, Fragment } from 'react';
import {Switch,Route, Router, Redirect,} from "react-router-dom";
import Dashboard from '../component/Dashboard';
import Logout from '../component/Logout';
import User from '../component/user/Index';
import Department from '../component/department/Index';
class AdminRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    
                    <Route exact path="/admin/dashboard" component={Dashboard}></Route>
                    <Route exact path="/admin/user" component={User}></Route>
                    <Route exact path="/admin/user/role" component={User}></Route>
                    <Route exact path="/admin/permission" component={User}></Route>
                    <Route exact path="/admin/logout" component={Logout}></Route>
                    <Route exact path="/admin/department" component={Department}></Route>
                   
                    <Route path="/" render={() => (
                        <Redirect to="/admin/dashboard"/>
                    )}></Route>
                </Switch>
            </Fragment>

        );
    }
}

export default AdminRoute;