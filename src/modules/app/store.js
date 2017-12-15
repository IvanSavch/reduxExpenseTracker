import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import mainSaga from './sagas'

export const configureStore = initialState => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(mainSaga);

    return store
};
