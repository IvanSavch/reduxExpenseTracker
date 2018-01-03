import { call, fork, put, take } from 'redux-saga/effects'
import api from './../../api/api'
import * as Actions from './actions'
import {REQUEST} from "../../utils/actions";

export default function*() {
    yield fork(addBill);
}

export function* addBill() {
    while (true) {
        const action = yield take(Actions.ADD_BILL[REQUEST]);
        const { status, message } = yield call(api.addBill, action.data);

        if (status) {
            yield put(Actions.addBill.success());
        } else if (message) {
            yield put(Actions.addBill.failure({error: message}));
        } else {
            throw Error('API must return success status or message');
        }
    }
}
