import React, { Component } from "react";
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="30" />
  </Cell>
);
export default class DataTable extends Component {
  render() {
      let {data} = this.props
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
        <Column width={100} sortable>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={100} sortable resizable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100} sortable resizable>
          <HeaderCell>Email</HeaderCell>
          <Cell>
            {(rowData, rowIndex) => {
              return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
            }}
          </Cell>
        </Column>

        <Column width={80} resizable>
          <HeaderCell>Avartar</HeaderCell>
          <ImageCell dataKey="avartar" />
        </Column>
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
