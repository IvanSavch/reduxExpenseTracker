import { fork } from 'redux-saga/effects'

export default function* mainSaga() {
   console.log("saga run");
}

import * as add from 'modules/add'
import * as category from 'modules/category'

export default function* mainSaga() {
    yield fork(add.sagas.mainSaga);
    yield fork(category.sagas.mainSaga);
}
