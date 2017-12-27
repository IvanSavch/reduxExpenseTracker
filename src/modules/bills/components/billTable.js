import {Component} from 'react';
import React from 'react';

import {} from './../../../api/api';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class BillTable extends Component {
    constructor(props) {
        super(props);

        this.cellEditProp = {
            mode: 'dbclick',
            blurToSave: true,
            beforeSaveCell: this.onBeforeSaveCell.bind(this), // a hook for before saving cell
            afterSaveCell: this.onAfterSaveCell.bind(this)  // a hook for after saving cell
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.addBill(data);
    }

    onAfterSaveCell(row, cellName, cellValue) {
        this.props.onEdit(row);
    }

    onBeforeSaveCell(row, cellName, cellValue) {
        // You can do any validation on here for editing value,
        // return false for reject the editing
        return !!cellValue;
    }

    render() {
        console.log(this.props.bills);
        return (
            <BootstrapTable cellEdit={ this.cellEditProp } data={this.props.bills} hover={true} borders={false}>
                <TableHeaderColumn dataField="id" isKey>#</TableHeaderColumn>
                <TableHeaderColumn dataField="title">Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="amount">Product Price</TableHeaderColumn>
                <TableHeaderColumn dataField="category">Product category</TableHeaderColumn>
                <TableHeaderColumn dataField="description">Product description</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default BillTable;
