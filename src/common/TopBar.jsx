import React, { Component } from "react";


export default class TopBar extends Component {
  state ={
    menu:[
      {icon:'fas fa-bell',link:'#'},
      {icon:'fas fa-cog',link:'#'},
      {icon:'fas fa-user-circle',link:'#'},
      {icon:'fas fa-sign-out-alt',link:'#'},
    ]
  }
  render() {
      const {toggleSideBar} = this.props
      let menu = this.state.menu
    return (
      <div className="shadow-sm p-3 bg-white rounded sticky-top">
        <div className="d-flex align-item-center">
            <div className="mr-auto d-flex">
            <button onClick={()=>{toggleSideBar()}} className="btn btn-default mr-3"><i className="fas fa-bars font-weight-bold"></i></button>
                <div className="ml-5"> 
                  <h4>PMS </h4>
                </div>
                
                
            </div>
            <div className="mr-auto">
               
            </div>
            <div className="ml-auto">
                <div className="d-flex align-item-center">
                  {menu.map(item=>(
                    <a href={item.link} style={{color:"#767676"}} className="font-weight-bold text-decoration-none top-header-icon"><i className={item.icon}></i></a>
                  ))}
                    
                </div>
            </div>
        </div>
      </div>
    );
  }
}
