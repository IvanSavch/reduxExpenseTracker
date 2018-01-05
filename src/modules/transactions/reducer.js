import { combineReducers } from 'redux'
import * as ActionTypes from './actions'
import {ADD_TRANSACTION} from './../add/actions';
import {FAILURE, REQUEST, SUCCESS} from "../../utils/actions";
import uuid from 'js-uuid';

function list(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOAD_TRANSACTIONS[SUCCESS]:
            let data = action.response.reduce((ob, element) => {
                ob[element.id] = element;
                return ob;
            }, {});
            console.log("load transaction", Object.assign({}, state, data));
            return Object.assign({}, state, data);
        case ADD_TRANSACTION[SUCCESS]:
            let id = uuid.v4();
            let newTransaction = action.response.data;
            newTransaction.id = id;
            console.log("add", Object.assign({}, state, { [id]: newTransaction }));
            return Object.assign({}, state, {[id]: newTransaction});
        default:
            return state;
    }
}

function loading(state = false, action) {
    switch (action.type) {
        case ActionTypes.LOAD_TRANSACTIONS[REQUEST]:
        case ActionTypes.EDIT_TRANSACTION[REQUEST]:
            return true;
        case ActionTypes.LOAD_TRANSACTIONS[SUCCESS]:
        case ActionTypes.EDIT_TRANSACTION[SUCCESS]:
        case ActionTypes.LOAD_TRANSACTIONS[FAILURE]:
        case ActionTypes.EDIT_TRANSACTION[FAILURE]:
            return false;
        default:
            return state;
    }
}

function ids(state = [], action) {
    switch (action.type) {
        case ActionTypes.LOAD_TRANSACTIONS[SUCCESS]:
            return action.response.map(element => element.id);
        case ADD_TRANSACTION[SUCCESS]:
            console.log("update ids", [...state, action.response.data.id]);
            return [...state, action.response.data.id];
        default:
            return state
    }
}

function errorMessage(state = "", action){
    switch (action.type) {
        case ActionTypes.LOAD_TRANSACTIONS[FAILURE]:
        case ActionTypes.EDIT_TRANSACTION[FAILURE]:
            return action.error;
        case ActionTypes.LOAD_TRANSACTIONS[REQUEST]:
        case ActionTypes.EDIT_TRANSACTION[REQUEST]:
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
