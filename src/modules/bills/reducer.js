import { combineReducers } from 'redux'
import * as ActionTypes from './actions'
import {ADD_BILL} from './../add/actions';
import {FAILURE, REQUEST, SUCCESS} from "../../utils/actions";
import uuid from 'js-uuid';

function list(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOAD_BILLS[SUCCESS]:
            let data = action.response.reduce((ob, element) => {
                ob[element.id] = element;
                return ob;
            }, {});
            console.log("load bill", Object.assign({}, state, data));
            return Object.assign({}, state, data);
        case ADD_BILL[REQUEST]:
            let id = uuid.v4();
            let newBill = action.data;
            newBill.id = id;
            return Object.assign({}, state, {[id]: newBill});
        default:
            return state;
    }
}

function loading(state = false, action) {
    switch (action.type) {
        case ActionTypes.LOAD_BILLS[REQUEST]:
        case ActionTypes.EDIT_BILL[REQUEST]:
            return true;
        case ActionTypes.LOAD_BILLS[SUCCESS]:
        case ActionTypes.EDIT_BILL[SUCCESS]:
        case ActionTypes.LOAD_BILLS[FAILURE]:
        case ActionTypes.EDIT_BILL[FAILURE]:
            return false;
        default:
            return state;
    }
}

function ids(state = [], action) {
    switch (action.type) {
        case ActionTypes.LOAD_BILLS[SUCCESS]:
            return action.response.map(element => element.id);
        case ADD_BILL:
            return [...state, action.data.id];
        default:
            return state
    }
}

function errorMessage(state = "", action){
    switch (action.type) {
        case ActionTypes.LOAD_BILLS[FAILURE]:
        case ActionTypes.EDIT_BILL[FAILURE]:
            return action.error;
        case ActionTypes.LOAD_BILLS[REQUEST]:
        case ActionTypes.EDIT_BILL[REQUEST]:
            return "";
        default:
            return state;
    }
}

export default combineReducers({
    list,
    ids,
    loading,
    errorMessage
})
