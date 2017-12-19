import { combineReducers } from 'redux'

import * as add from './../add'
import * as category from './../category'
import * as bills from './../bills'

export default combineReducers({
    [add.moduleName]: add.reducer,
    [category.moduleName]: category.reducer,
    [bills.moduleName]: bills.reducer,
})
