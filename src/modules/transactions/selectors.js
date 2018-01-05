import { createSelector } from 'reselect'
import { moduleName } from './index'

const transactions = state => state[moduleName];

export const getTransactionById = createSelector(transactions, (state, props) => state.list);
export const getTransactionIds = createSelector(transactions, (state) => state.ids);
export const getTransactionList = createSelector([getTransactionIds, getTransactionById], (ids, byId) => { console.log(ids, byId); return ids.map(id => byId[id]) });

export const getIsLoading = createSelector(transactions, state => state.isLoading);
export const getErrorMessage = createSelector(transactions, state => state.errorMessage);
