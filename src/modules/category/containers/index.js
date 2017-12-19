import {Component} from 'react';
import React from 'react';
import { connect } from 'react-redux'

class CategoryList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Category list</div>
        )
    }
}

/*const mapStateToProps = (state, props) => {
    return {
        bills: getBillList(state),
        billIds: getBillIds(state),
        isFetching: getIsFetching(state),
        errorMessage: getErrorMessage(state)
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    loadBills() {
        dispatch(loadBills.request());
    }
});*/

export default connect(/*mapStateToProps, mapDispatchToProps*/)(CategoryList)
