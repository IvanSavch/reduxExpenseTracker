import { call, fork, put, take } from 'redux-saga/effects'
import api from './../../api/api'
import * as Actions from './actions'
import {REQUEST} from "../../utils/actions";

export default function*() {
    yield fork(addBill);
}

export function* addBill() {
    while (true) {
        const data = yield take(Actions.ADD_BILL[REQUEST]);
        const { response, message } = yield call(api.addBill(data));
        if (response && response.status) {
            yield put(Actions.addBill.success());
        } else if (message) {
            yield put(Actions.addBill.failure({error: message}));
        } else {
            throw Error('API must return success status or message');
        }
    }
}
