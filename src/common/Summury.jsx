import React, { Component } from 'react'

export default class Summury extends Component {
    render() {
        let {summury} = this.props
        return (
            <div className="w-100 mb-2">
                
                <div className="row">
                    {summury.map(item=>(
                        <div className="col-6 col-md-3 col-lg-2 col-xl-2 col-sm-6 col-xm-6 mt-1">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-title d-flex justify-content-between">
                                                <div>
                                                    <h4>{item.data}</h4>
                                                </div>
                                                <div>{item.name}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
