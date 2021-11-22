import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {toolNew} = this.props
        return (
            <div class="modal fade" id={toolNew.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header pl-5 pr-5">
                        <h5 class="modal-title" id="exampleModalLongTitle">{toolNew.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body pl-5 pr-5">
                        <form>
                    
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Your First Name</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        
                        <button type="button" class="submit-btn">Save</button>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}
