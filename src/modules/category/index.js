import mainSaga from './sagas'
import * as action from './actions';
import CategoryList from './containers/index';

export const moduleName = 'category';

export { default as reducer } from './reducer'

export const sagas = {
    mainSaga,
};

export const actions = action;

export const containers = {
    CategoryList
};
