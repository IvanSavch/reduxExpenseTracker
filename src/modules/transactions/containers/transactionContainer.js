import {Component} from 'react';
import React from 'react';
import { connect } from 'react-redux'

import TransactionTable from './../components/transactionTable';
import { getTransactionIds, getTransactionList, getErrorMessage, getIsFetching} from "../selectors";
import { loadTransactions, editTransaction} from "../actions";

class TransactionsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.loadTransactions();
    }

    render() {
        let transactions = this.props.transactions || [];
        console.log("render transaction", transactions);
        return (
            <TransactionTable
                Transactions={transactions}
                onEdit={this.props.editTransaction}
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        transactions: getTransactionList(state),
        transactionIds: getTransactionIds(state)
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    loadTransactions() {
        dispatch(loadTransactions.request());
    },

    editTransaction(data) {
        dispatch(editTransaction.request(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)
