import React, { Component } from 'react'


export default class Table extends Component {
    render() {
        return (
            <div className="card shadow-sm">
                <div className="card-header bg-grey shadow-sm">
                    <h3 className="text-center">Table Content</h3>
                </div>
                <div class="card-body">
                    
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td></td>
                        </tr>
                        
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
