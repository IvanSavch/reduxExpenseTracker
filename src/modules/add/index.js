import AddForm from './containers/addForm';
import mainSaga from './sagas'
import * as action from './actions';

export const moduleName = 'add';

export { default as reducer } from './reducer'

export const sagas = {
    mainSaga,
};

export const actions = action;

export const components = {
    AddForm
};
