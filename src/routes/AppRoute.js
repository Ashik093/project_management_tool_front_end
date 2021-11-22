import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Login from '../component/Login';
import Admin from '../component/Admin';
class AppRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/admin" component={Admin}></Route>
                    <Route exact path="/" component={Login}></Route>
                </Switch>
            </Router>
        );
    }
}

export default AppRoute;