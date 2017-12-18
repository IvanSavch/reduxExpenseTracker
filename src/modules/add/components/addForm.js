import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types'

import * as types from './../types';
import './addForm.scss';


class AddFormComponent extends Component {
    constructor(props) {
        super(props);

        this.initialValues = {
            value: "",
            title: "",
            category: "",
            description: ""
        };

        this.state = this.initialValues;
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const {categoryList} = this.props;
        return (
            <div className='panel panel-default'>
                <div class="panel-heading">Add new value</div>
                <form onSubmit={this.onSubmit} role='form' className='form-horizontal panel-body'>
                    <div className='form-group'>
                        <label className='control-label col-md-2'>Title</label>
                        <div className='col-md-10'>
                            <input name='title'  value={this.state.title} className='form-control'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='control-label col-md-2'>Costs</label>
                        <div className='col-md-10'>
                            <input value={this.state.value} name='value' className='form-control'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='control-label col-md-2'>Category</label>
                        <div className='col-md-10'>
                            <select value={this.state.category} name='category' className='form-control'>
                                {categoryList.map(element =>
                                    <option key={element.value}>{element.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='control-label col-md-2'>Description</label>
                        <div className='col-md-10'>
                            <input value={this.state.description} name='description' className='form-control'/>
                        </div>
                    </div>
                    <button className='btn btn-primary pull-right'>Add</button>
                </form>
            </div>
        )
    }
}

AddFormComponent.propTypes = {
    onSubmit: () => {},
    categoryList: types.categories
};

export default AddFormComponent;
