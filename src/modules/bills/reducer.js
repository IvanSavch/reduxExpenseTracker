import { combineReducers } from 'redux'
import * as ActionTypes from './actions'
import {FAILURE, REQUEST, SUCCESS} from "../../utils/actions";

function list(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOAD_BILLS[SUCCESS]:
            let data = action.response.reduce((ob, element) => {
                ob[element.id] = element;
                return ob;
            }, {});
            return data;
        default:
            return state
    }
}

function isFetching(state = false, action) {
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
    isFetching,
    errorMessage
})
