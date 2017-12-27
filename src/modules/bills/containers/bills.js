import {Component} from 'react';
import React from 'react';
import { connect } from 'react-redux'

import BillTable from './../components/billTable';
import {getBillIds, getBillList, getErrorMessage, getIsFetching} from "../selectors";
import {loadBills, editBill} from "../actions";

class Bills extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadBills();
    }

    render() {
        let bills = this.props.bills || [];
        console.log("render bill", bills);
        return (
            <BillTable
                bills={bills}
                onEdit={this.props.editBill}
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        bills: getBillList(state),
        billIds: getBillIds(state)
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    loadBills() {
        dispatch(loadBills.request());
    },

    editBill(data) {
        dispatch(editBill.request(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Bills)
