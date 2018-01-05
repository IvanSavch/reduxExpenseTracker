import {createRequestTypes, action, REQUEST, SUCCESS, FAILURE} from './../../utils/actions';

export const ADD_TRANSACTION = createRequestTypes('ADD_TRANSACTION');
export const addBill = {
    request: data => action(ADD_TRANSACTION[REQUEST], {data}),
    success: response => action(ADD_TRANSACTION[SUCCESS], {response}),
    failure: error => action(ADD_TRANSACTION[FAILURE], {error})
};
