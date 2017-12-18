import { combineReducers } from 'redux'

import * as add from './../add'
import * as category from './../category'

export default combineReducers({
    [add.moduleName]: add.reducer,
    [category.moduleName]: category.reducer,
})
