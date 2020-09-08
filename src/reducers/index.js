import {combineReducers} from 'redux'
import textReducers from './reducers'

export default combineReducers({text: textReducers})
