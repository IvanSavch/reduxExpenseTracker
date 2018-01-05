import * as ActionTypes from './actions'
import { REQUEST, SUCCESS, FAILURE } from '../../utils/actions';

const initialState = {
    expense: [],
    income: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_BILL[REQUEST]:
            return Object.assign({}, state, {loading: true});
        case ActionTypes.ADD_BILL[SUCCESS]:
            return Object.assign({}, state, {loading: false});
        case ActionTypes.ADD_BILL[FAILURE]:
            return Object.assign({}, state, {loading: false, errorMessage: action.error});
        default:
            return state;
    }
}

