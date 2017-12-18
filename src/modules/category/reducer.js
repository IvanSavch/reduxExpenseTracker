import { combineReducers } from 'redux'
import * as ActionTypes from './actions'

function list(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES.success:
            let data = action.data.reduce((ob, element) => {
                ob[element.value] = element;
                return ob;
            }, {});
            return data;
        default:
            return state
    }
}

function isFetching(state = false, action) {
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES.request:
            return true;
        case ActionTypes.LOAD_CATEGORIES.success:
        case ActionTypes.LOAD_CATEGORIES.failure:
            return false;
        default:
            return state;
    }
}

function ids(state = [], action) {
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES.success:
            return action.data.map(element => element.value);
        default:
            return state
    }
}

function errorMessage(state = "", action){
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES.failure:
            return action.error;
        case ActionTypes.LOAD_CATEGORIES.request:
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
