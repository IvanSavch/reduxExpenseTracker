import { createSelector } from 'reselect'
import { moduleName } from './index'

const bills = state => state[moduleName];

export const getBillById = createSelector(bills, (state, props) => state.list);
export const getBillIds = createSelector(bills, (state) => state.ids);
export const getBillList = createSelector([getBillIds, getBillById], (ids, byId) => ids.map(id => byId[id]));
export const getIsFetching = createSelector(bills, state => state.isFetching);
export const getErrorMessage = createSelector(bills, state => state.errorMessage);
