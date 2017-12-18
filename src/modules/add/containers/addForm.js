import {Component} from 'react';
import React from 'react';
import { connect } from 'react-redux'

import AddFormComponent from './../components/addForm';

class AddForm extends Component {
    constructor(props) {
        super(props);

        this.categoryList = [
            {name: 'Food', value: 'food'},
            {name: 'Cinema', value: 'cinema'},
            {name: 'Clothes', value: 'clothes'},
            {name: 'Gifts', value: 'gifts'},
            {name: 'Fixed expenses', value: 'fixed'}
        ];

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.addBill(data);
    }

    render() {
        return (
            <AddFormComponent
                categoryList={this.categoryList}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
    AddForm,
});

const mapDispatchToProps = (dispatch, props) => ({
    addBill(data) {
        dispatch(AddBill(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
