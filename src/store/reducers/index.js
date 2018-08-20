import { combineReducers } from 'redux'
import counter from './counter'
import showTip from './showTip'

export default combineReducers({
    counter,
    showTip
})
