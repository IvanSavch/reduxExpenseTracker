import { createSelector } from 'reselect'
import { moduleName } from './index'

const bill = state => state[moduleName];
export const getIsFetching = createSelector(bill, state => state.isFetching);
export const getError = createSelector(bill, state => state.errorMessage);
