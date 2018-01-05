import { fork } from 'redux-saga/effects'

import * as dashboard from 'modules/dashboard'
import * as category from 'modules/category'
import * as transactions from 'modules/transactions'

export default function* mainSaga() {
    yield fork(dashboard.sagas.mainSaga);
    yield fork(category.sagas.mainSaga);
    yield fork(transactions.sagas.mainSaga);
}
