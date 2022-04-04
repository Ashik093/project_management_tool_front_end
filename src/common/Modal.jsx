import React, { Component } from 'react'
import { connect } from 'react-redux';
import storeUser from '../data/store/action/storeUser'
import { Rings } from  'react-loader-spinner'
import storeDepartment from '../data/store/action/storeDepartment';
import updateDepartment from '../data/store/action/updateDepartment';



class Modal extends Component {
    state={
        form:{},
        baseURL:'',
        close:React.createRef(),
        loading:false,
        module:this.props.module,
        formRef:null,
        editForm:{},
        editFormRef:null,
    }
    
    
    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({loading:true})
        if(this.state.module==='user'){
            this.props.storeUserAction(this.state.form,this.props.customHistory,result=>{
                if(result===true){
                    this.state.close.current.click();
                    this.props.shouldCallUpdate(true)
                    this.props.customHistory.push('/admin/user')
                }
                this.setState({loading:false})
                this.formRef.reset()
                
            })
        }else if(this.state.module==='department'){
            this.props.storeDepartmentAction(this.state.form,this.props.customHistory,result=>{
                if(result===true){
                    this.state.close.current.click();
                    this.props.shouldCallUpdate(true)
                    this.props.customHistory.push('/admin/department')
                }
                this.setState({loading:false})
                this.formRef.reset()
             })
        }   
        
    }
    handleUpdateSubmit=(event)=>{
        event.preventDefault()
        //this.setState({loading:true})
        if(this.state.module==='user'){
            // this.props.storeUserAction(this.state.form,this.props.customHistory,result=>{
            //     if(result===true){
            //         this.state.close.current.click();
            //         this.props.shouldCallUpdate(true)
            //         this.props.customHistory.push('/admin/user')
            //     }
            //     this.setState({loading:false})
            //     this.formRef.reset()
                
            // })
        }else if(this.state.module==='department'){
            this.props.updateDepartmentAction(this.state.editForm,this.props.customHistory,result=>{
                if(result===true){
                    this.state.close.current.click();
                    this.props.shouldCallUpdate(true)
                    this.props.customHistory.push('/admin/department')
                }
                this.setState({loading:false})
                this.formRef.reset()
             })
        }
    }
    handleChange=(event)=>{
        if(event.target.files){
            let file = event.target.files[0]
            this.getBase64(file)
                .then(result => {
                    this.setState({
                        form:{
                            ...this.state.form,
                            [event.target.name]:result
                        },
                        baseURL:result
                    });
                })
        }else{
            
            this.setState({
                form:{
                    ...this.state.form,
                    [event.target.name]:event.target.value
                }
            })
        } 
    }
    handleChangeEdit=(event)=>{
        if(event.target.files){
            let file = event.target.files[0]
            this.getBase64(file)
                .then(result => {
                    this.setState({
                        editForm:{
                            ...this.state.form,
                            [event.target.name]:result
                        },
                        baseURL:result
                    });
                })
        }else{
            
            this.setState({
                editForm:{
                    ...this.state.editForm,
                    [event.target.name]:event.target.value
                }
            })
        } 
    }
    getBase64 = file => {
        return new Promise(resolve => {
          let baseURL = "";
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
      };

      componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.editFormData !== this.props.editFormData) {
            this.setState({editForm:this.props.editFormData})
            
        }
      }
      
    render() {
        let {toolNew,formToPassModal,toolEdit,editFormToPassModal} = this.props
        
        return (
            <React.Fragment>
            <div class="modal fade" id={toolNew.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header pl-5 pr-5">
                        <h5 class="modal-title" id="exampleModalLongTitle">{toolNew.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref={this.state.close}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={()=>{this.handleSubmit(event)}} ref={(ref) => this.formRef = ref} encType="multipart/form-data">
                        <div class="modal-body pl-5 pr-5">
                        

                            <div className="row">  
                                <div className="col-md-6">
                                 {formToPassModal.map(item=>(
                                      item.position === 'left' && ( item.type ==='dropdown' ? <div class="form-group row">
                                      <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                      <div class="col-sm-8">
                                          <select name={item.name} id={item.id} className='form-control' onChange={this.handleChange}>
                                            {item.option.map(op=>(
                                                <option value={op.value}>
                                                    {op.name}
                                                </option>
                                            ))}
                                          </select>
                                      </div>
                                  </div>:<div class="form-group row">
                                                <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                                <div class="col-sm-8">
                                                    <input type={item.type} class="form-control" id={item.id} name={item.name} required onChange={this.handleChange} />
                                                </div>
                                            </div>) 

                                ))} 
 
                                </div>
                                <div className="col-md-6">
                                 {formToPassModal.map(item=>(
                                      item.position === 'right' && (item.type ==='dropdown' ?  <div class="form-group row">
                                      <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                      <div class="col-sm-8">
                                          <select name={item.name} id={item.id} className='form-control' onChange={this.handleChange}>
                                            {item.option.map(op=>(
                                                <option value={op.value}>
                                                    {op.name}
                                                </option>
                                            ))}
                                          </select>
                                      </div>
                                  </div>:<div class="form-group row">
                                                <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                                <div class="col-sm-8">
                                                    <input type={item.type} class="form-control" id={item.id} name={item.name} onChange={this.handleChange} />
                                                </div>
                                            </div>) 

                                ))}
                                
                                </div>
                                {this.state.baseURL && (
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={this.state.baseURL} alt="image" className='img-thumbnail' style={{height: '80px',width:'200px'}}/>
                                        </div>
                                    </div>
                                )}
                                 
                            </div>
                        
                        </div>
                        
                      
                        <div class="modal-footer">
                            
                            {!this.state.loading && <button type="submit" class="submit-btn">Save</button>}
                            {this.state.loading && <Rings ariaLabel="loading-indicator" width="500"/>}
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" id={toolEdit.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header pl-5 pr-5">
                        <h5 class="modal-title" id="exampleModalLongTitle">{toolEdit.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref={this.state.close}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={()=>{this.handleUpdateSubmit(event)}} ref={(ref) => this.editFormRef = ref} encType="multipart/form-data">
                        <div class="modal-body pl-5 pr-5">
                        

                            <div className="row">  
                                <div className="col-md-6">
                                 {editFormToPassModal.map(item=>(
                                      item.position === 'left' && ( item.type ==='dropdown' ? <div class="form-group row">
                                      <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                      <div class="col-sm-8">
                                          <select name={item.name} id={item.id} className='form-control' onChange={this.handleChangeEdit}>
                                            {item.option.map(op=>(
                                                <option value={op.value}>
                                                    {op.name}
                                                </option>
                                            ))}
                                          </select>
                                      </div>
                                  </div>:<div class="form-group row">
                                                <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                                <div class="col-sm-8">
                                                    <input type={item.type} class="form-control" id={item.id} name={item.name} value={this.state.editForm[item.name]} required onChange={this.handleChangeEdit} />
                                                </div>
                                            </div>) 

                                ))} 
 
                                </div>
                                <div className="col-md-6">
                                 {editFormToPassModal.map(item=>(
                                      item.position === 'right' && (item.type ==='dropdown' ?  <div class="form-group row">
                                      <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                      <div class="col-sm-8">
                                          <select name={item.name} id={item.id} className='form-control' onChange={this.handleChangeEdit}>
                                            {item.option.map(op=>(
                                                <option value={op.value}>
                                                    {op.name}
                                                </option>
                                            ))}
                                          </select>
                                      </div>
                                  </div>:<div class="form-group row">
                                                <label for={item.id} class="col-sm-4 col-form-label">{item.label}</label>
                                                <div class="col-sm-8">
                                                    <input type={item.type} class="form-control" id={item.id} name={item.name} value={this.state.editForm[item.name]} required onChange={this.handleChangeEdit} />
                                                </div>
                                            </div>) 

                                ))}
                                
                                </div>
                                {this.state.baseURL && (
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={this.state.baseURL} alt="image" className='img-thumbnail' style={{height: '80px',width:'200px'}}/>
                                        </div>
                                    </div>
                                )}
                                 
                            </div>
                        
                        </div>
                        {editFormToPassModal.map(item=>(
                            item.position === 'hidden' ?  (<input type={item.type} class="form-control" id={item.id} name={item.name} value={this.state.editForm[item.name]} />):'') 

                      )}
                      
                        <div class="modal-footer">
                            
                            {!this.state.loading && <button type="submit" class="submit-btn">Save</button>}
                            {this.state.loading && <Rings ariaLabel="loading-indicator" width="500"/>}
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        storeUserAction: (data,history,callback)=>{
          dispatch(storeUser(data,history,callback))
        },
        storeDepartmentAction:(data,history,callback)=>{
            dispatch(storeDepartment(data,history,callback))
        },
        updateDepartmentAction:(data,history,callback)=>{
            dispatch(updateDepartment(data,history,callback))
        }
        
    }
  }
export default connect(null,mapDispatchToProps)(Modal);
