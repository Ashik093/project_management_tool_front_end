import React, { Component } from "react";
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="30" />
  </Cell>
);
export default class DataTable extends Component {
  render() {
      let {data,tableProperty} = this.props
    return (
      <Table bordered height={380} data={data}>
        <Column width={60} fixed>
          <HeaderCell>
            <input type="checkbox" />
          </HeaderCell>

          <Cell>
            {(rowData) => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return <input type="checkbox" />;
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
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <a>
                    {" "}
                    <i className="fas fa-edit"></i>{" "}
                  </a>{" "}
                  <a>
                    <i className="fas fa-trash"></i>
                  </a>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table>
    );
  }
}
