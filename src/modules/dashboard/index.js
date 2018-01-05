import DashboardContainer from './containers/dashboardContainer';
import mainSaga from './sagas'
import * as action from './actions';

export const moduleName = 'dashboard';

export { default as reducer } from './reducer'

export const sagas = {
    mainSaga,
};

export const actions = action;

export const containers = {
    DashboardContainer
};
