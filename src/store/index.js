import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducers'

const composeEnhancers = composeWithDevTools({
  name: 'Example Redux'
})

const initialState = {
  text: ''
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
