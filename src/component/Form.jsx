
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";


export default class Form extends Component {
    state={
        tooglePop:false
    }
    openModal=(e)=>{
        console.log('ddd')
        this.setState({tooglePop:true})
    }
    closeModal=(e)=>{
        this.setState({tooglePop:false})
    }
  render() {
    return (
      <div className="container mt-5">
        <Button variant="primary"  onClick={this.openModal}>
            Custom Width Modal
        </Button>

        <Modal
          size="lg"
          show={this.state.tooglePop}
          onHide={this.closeModal}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          className="custom-modal-size"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Adding Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" className="p-3">
                <div className="row">
                    <div className="col-6 border-right">
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div class="form-group d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    
                </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
