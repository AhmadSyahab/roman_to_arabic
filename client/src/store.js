import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './reducers'
import thunk from 'redux-thunk'

  // Initialize Firebase
const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer,composeEnhancers(middleware))


export default store