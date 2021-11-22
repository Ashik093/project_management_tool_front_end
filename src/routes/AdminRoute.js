import React, { Component, Fragment } from 'react';
import {Switch,Route, Router, Redirect,} from "react-router-dom";
import Dashboard from '../component/Dashboard';
import Index from '../component/user/Index';
class AdminRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    
                    <Route exact path="/admin/dashboard" component={Dashboard}></Route>
                    <Route exact path="/admin/user" component={Index}></Route>
                    <Route exact path="/admin/user/role" component={Index}></Route>
                    <Route exact path="/admin/permission" component={Index}></Route>
                   
                    <Route path="/" render={() => (
                        <Redirect to="/admin/dashboard"/>
                    )}></Route>
                </Switch>
            </Fragment>

        );
    }
}

export default AdminRoute;