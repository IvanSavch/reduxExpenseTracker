import { call, fork, put, take } from 'redux-saga/effects'
import api from './../../api/api'
import * as Actions from './actions'
import {REQUEST} from "../../utils/actions";

export default function*() {
    yield fork(loadCategories);
    yield put(Actions.loadCategories.request())
}

export function* loadCategories() {
    while (true) {
        yield take(Actions.LOAD_CATEGORIES[REQUEST]);
        const { categories, message } = yield call(api.fetchCategories);
        if (categories) {
            yield put(Actions.loadCategories.success({data: categories}));
        } else if (message) {
            yield put(Actions.loadCategories.failure({error: message}));
        } else {
            throw Error('API must return categories or message');
        }
    }
}
