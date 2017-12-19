import {Component} from 'react';
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class BillTable extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.addBill(data);
    }

    render() {
        console.log(this.props.bills);
        return (
            <BootstrapTable data={this.props.bills} striped={true} hover={true}>
                <TableHeaderColumn key='id' dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                <TableHeaderColumn key='title' dataField="title" dataSort={true}>Product Name</TableHeaderColumn>
                <TableHeaderColumn key='amount' dataField="amount">Product Price</TableHeaderColumn>
                <TableHeaderColumn key='category' dataField="category">Product category</TableHeaderColumn>
                <TableHeaderColumn key='description' dataField="description">Product description</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default BillTable;
