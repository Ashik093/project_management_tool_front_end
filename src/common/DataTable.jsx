import React, { Component } from "react";
import { connect } from 'react-redux';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Rings } from  'react-loader-spinner'
import deleteUser from './../data/store/action/deleteUser'
const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="30" />
  </Cell>
);
class DataTable extends Component {
  state={
    loading:false
  }
  
  render() {
      let {data,tableProperty} = this.props
    return (
      <Table bordered height={380} data={data}>
        <Column width={60} fixed>
          <HeaderCell>
            <input type="checkbox"  />
          </HeaderCell>

          <Cell>
            {(rowData) => {
              return <input type="checkbox" value={rowData.id}/>;
            }}
          </Cell>
        </Column>
        {tableProperty.map(item=>{
          if (item.type==='text') {
            return <Column width={110} sortable resizable>
              <HeaderCell>{item.headerCell}</HeaderCell>
              <Cell dataKey={item.dataKey} />
            </Column>
          }else if(item.type==='image'){
            return <Column width={80} sortable resizable>
              <HeaderCell>{item.headerCell}</HeaderCell>
              <ImageCell dataKey="profile_photo" />
            </Column>
          }else if(item.type==='email'){
            return <Column width={120} sortable resizable>
              <HeaderCell>{item.headerCell}</HeaderCell>
              <Cell>
                {(rowData, rowIndex) => {
                  return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
                }}
              </Cell>
            </Column>
          }
          
        })}
        <Column width={80} fixed="right">
          <HeaderCell>Action</HeaderCell>

          <Cell>
            {(rowData) => {
               const handleAction=()=>{
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.props.deleteUserAction(rowData.id,this.props.customHistory,result=>{
                      if(result===true){
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                          this.props.shouldCallUpdate(true)
                          this.props.customHistory.push('/admin/user')
                      }
                     
                  })
                      
                  }
                })        
              }
              return (
                <span>
                  <a href="#" onClick={handleAction}>
                    {" "}
                    <i className="fas fa-edit"></i>{" "}
                  </a>{" "}
                  <a href="#" onClick={handleAction}>
                    <i className="fas fa-trash"></i>
                  </a>
                </span>
              );
            }}
          </Cell>
        </Column>
        {this.state.loading && <Rings ariaLabel="loading-indicator" width="500"/>}
      </Table>
    );
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    deleteUserAction: (data,history,callback)=>{
        dispatch(deleteUser(data,history,callback))
      }
  }
}
export default connect(null,mapDispatchToProps)(DataTable);