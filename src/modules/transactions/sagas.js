import { call, fork, put, take } from 'redux-saga/effects'
import api from './../../api/api'
import * as Actions from './actions'
import {REQUEST} from "../../utils/actions";

export default function*() {
    yield fork(loadTransactions);
    yield fork(editTransaction);
    yield put(Actions.loadTransactions.request());
}

export function* loadTransactions() {
    while (true) {
        yield take(Actions.LOAD_TRANSACTIONS[REQUEST]);
        const { transactions, message } = yield call(api.fetchTransactions);
        if (transactions) {
            yield put(Actions.loadTransactions.success(transactions));
        } else if (message) {
            yield put(Actions.loadTransactions.failure(message));
        } else {
            throw Error('API must return transactions or message');
        }
    }
}

export function* editTransaction() {
    while (true) {
        const data = yield take(Actions.EDIT_TRANSACTION[REQUEST]);
        const { status, message } = yield call(api.editTransaction, data);
        if (status) {
            yield put(Actions.editTransaction.success());
        } else if (message) {
            yield put(Actions.editTransaction.failure(message));
        } else {
            throw Error('API must return status or message');
        }
    }
}
