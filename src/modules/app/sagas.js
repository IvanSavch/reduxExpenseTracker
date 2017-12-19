import { fork } from 'redux-saga/effects'

import * as add from 'modules/add'
import * as category from 'modules/category'
import * as bills from 'modules/bills'

export default function* mainSaga() {
    yield fork(add.sagas.mainSaga);
    yield fork(category.sagas.mainSaga);
    yield fork(bills.sagas.mainSaga);
}
