import {createRequestTypes, action, REQUEST, SUCCESS, FAILURE} from './../../utils/actions';

export const LOAD_BILLS = createRequestTypes('LOAD_BILLS');
export const loadBills = {
    request: () => action(LOAD_BILLS[REQUEST]),
    success: response => action(LOAD_BILLS[SUCCESS], {response}),
    failure: error => action(LOAD_BILLS[FAILURE], {error})
};

export const EDIT_BILL = createRequestTypes('EDIT_BILL');
export const editBill = {
    request: (data) => action(EDIT_BILL[REQUEST], data),
    success: response => action(EDIT_BILL[SUCCESS], {response}),
    failure: error => action(EDIT_BILL[FAILURE], {error})
};
