import {Component} from 'react';
import React from 'react';
import { connect } from 'react-redux'

import AddFormComponent from './../components/addForm';
import {getBillIds, getBillList, getErrorMessage, getIsFetching} from "../../bills/selectors";
import {getCategoryList} from "../../category/selectors";
import {addBill} from "../actions";

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.addBill(data);
    }

    render() {
        return (
            <AddFormComponent
                categoryList={this.props.categoryList}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        categoryList: getCategoryList(state)
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    addBill(data) {
        dispatch(addBill(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
