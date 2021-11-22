import React, { Component } from 'react'
import Card from '../share/Card'


export default class Dashboard extends Component {
    render() {
        return (
            <div className="mt-5">
            <div className="warpper-container row">
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h2>This is test</h2>
                    </Card>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h2>This is test</h2>
                    </Card>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h2>This is test</h2>
                    </Card>
                </div>
                <div className="col-6 col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xm-6">
                    <Card>
                        <h2>This is test</h2>
                    </Card>
                </div>
            </div>
        </div>
            
        )
    }
}
