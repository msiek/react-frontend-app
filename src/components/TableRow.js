// TableRow.js

import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj._id}</td>
                <td>{this.props.obj.item}</td>
                <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                <td><button className="btn btn-danger">Delete </button></td>
            </tr>
        );
    }
}

export default TableRow;
