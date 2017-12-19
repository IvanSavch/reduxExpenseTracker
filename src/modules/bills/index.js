

import mainSaga from './sagas'
import * as action from './actions';
import Bills from './containers/bills';

export const moduleName = 'bills';

export { default as reducer } from './reducer'

export const sagas = {
    mainSaga,
};

export const actions = action;

export const containers = {
    Bills
};
