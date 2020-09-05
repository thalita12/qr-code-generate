import {combineReducers} from 'redux'
import counterReducers from './reducers'

export default combineReducers({text: counterReducers})
