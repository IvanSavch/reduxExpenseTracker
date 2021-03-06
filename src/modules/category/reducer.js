import { combineReducers } from 'redux'
import * as ActionTypes from './actions'
import {FAILURE, REQUEST, SUCCESS} from "../../utils/actions";

function list(state = {}, action) {
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES[SUCCESS]:
            let data = action.response.reduce((obj, element) => {
                obj[element.id] = element;
                return obj;
            }, {});
            return data;
        default:
            return state
    }
}

function isFetching(state = false, action) {
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES[REQUEST]:
            return true;
        case ActionTypes.LOAD_CATEGORIES[SUCCESS]:
        case ActionTypes.LOAD_CATEGORIES[FAILURE]:
            return false;
        default:
            return state;
    }
}

function ids(state = [], action) {
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES[SUCCESS]:
            return action.response.map(element => element.id);
        default:
            return state
    }
}

function errorMessage(state = "", action){
    switch (action.type) {
        case ActionTypes.LOAD_CATEGORIES[FAILURE]:
            return action.error;
        case ActionTypes.LOAD_CATEGORIES[REQUEST]:
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
