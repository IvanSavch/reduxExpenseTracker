import { createSelector } from 'reselect'
import { moduleName } from './index'

const categories = state => state[moduleName];

export const getCategoryById = createSelector(categories, (state) => state.list);
export const getCategoryIds = createSelector(categories, (state) => state.ids);
export const getCategoryList = createSelector([getCategoryIds, getCategoryById], (ids, byId) => ids.map(id => byId[id]));
