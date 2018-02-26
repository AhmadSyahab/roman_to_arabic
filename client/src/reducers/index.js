import { combineReducers } from 'redux'
import convertReducer from './convertReducer'
import outputReducer from './outputReducer'


const RootReducer = combineReducers({
	convertReducer,
	outputReducer
})

export default RootReducer