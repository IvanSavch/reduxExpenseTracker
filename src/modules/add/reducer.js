import * as ActionTypes from './actions'

const initialState = {
    isFetching: false,
    errorMessage: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_BILL.request:
            return Object.assign({}, state, {isFetching: true});
        case ActionTypes.ADD_BILL.success:
            return Object.assign({}, state, {isFetching: false});
        case ActionTypes.ADD_BILL.failure:
            return Object.assign({}, state, {isFetching: false, errorMessage: action.error});
        default:
            return state;
    }
}

