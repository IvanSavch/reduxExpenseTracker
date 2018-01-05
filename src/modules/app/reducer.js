import { combineReducers } from 'redux'

import * as dashboard from './../add';
import * as category from './../category';
import * as transactions from './../transactions';

export default combineReducers({
    [dashboard.moduleName]: dashboard.reducer,
    [category.moduleName]: category.reducer,
    [transactions.moduleName]: transactions.reducer,
})
