import {createRequestTypes, action, REQUEST, SUCCESS, FAILURE} from './../../utils/actions';

export const LOAD_TRANSACTIONS = createRequestTypes('LOAD_TRANSACTIONS');
export const loadTransactions = {
    request: () => action(LOAD_TRANSACTIONS[REQUEST]),
    success: response => action(LOAD_TRANSACTIONS[SUCCESS], {response}),
    failure: error => action(LOAD_TRANSACTIONS[FAILURE], {error})
};

export const EDIT_TRANSACTION = createRequestTypes('EDIT_TRANSACTION');
export const editTransaction = {
    request: data => action(EDIT_TRANSACTION[REQUEST], data),
    success: response => action(EDIT_TRANSACTION[SUCCESS], {response}),
    failure: error => action(EDIT_TRANSACTION[FAILURE], {error})
};
