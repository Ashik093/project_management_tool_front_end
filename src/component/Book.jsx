import React, { Component } from 'react'
import Card from '../share/Card'
import Input from '../share/Input'
import Table from '../share/Table'

export default class Book extends Component {
    state={
        show:false,
        form:[
            {
                label:"Enter Email",
                type:"email",
                name:"email",
                placeholder:"Enter Your Email"
            },
            {
                label:"Enter Name",
                type:"text",
                name:"name",
                placeholder:"Enter Your Name"
            },
            {
                label:"Enter Name",
                type:"text",
                name:"ss",
                placeholder:"Enter Your Name"
            }
        ]
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    render() {
        
        return (
            <div className="container mt-5">
                <button className="btn btn-danger btn-sm shadow-lg p-2 mb-4 d-flex ml-auto" onClick={this.handleClick}>Add New</button>
                {this.state.show && (
                    <Card className="d-none">
                    <div className="row">
                        {this.state.form.map(item=>
                            <div className="col-6">
                            <Input key={item.name} form={item}></Input>
                            </div> 
                        )}
                    </div>
                </Card>
                )}
                <Table></Table>
            </div>
        )
    }
}
