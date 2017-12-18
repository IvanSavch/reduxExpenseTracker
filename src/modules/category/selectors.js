import { createSelector } from 'reselect'
import { moduleName } from './index'

const categories = state => state[moduleName];

export const getCategoryById = createSelector(categories, (state, props) => state.list[props.id]);
export const getCategoryIds = createSelector(categories, (state) => state.ids);
export const getCategoryList = createSelector([getCategoryIds, categories], (ids, categories) => ids.map(id => getCategoryById(id)));
