import { call, fork, put, take } from 'redux-saga/effects'
import api from './../../api/api'
import * as Actions from './actions'
import {REQUEST} from "../../utils/actions";

export default function*() {
    yield fork(loadBills);
}

export function* loadBills() {
    while (true) {
        yield take(Actions.LOAD_BILLS[REQUEST]);
        const { bills, message } = yield call(api.fetchBills);
        if (bills) {
            yield put(Actions.loadBills.success(bills));
        } else if (message) {
            yield put(Actions.loadBills.failure(message));
        } else {
            throw Error('API must return bills or message');
        }
    }
}
