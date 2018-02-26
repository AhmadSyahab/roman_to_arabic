const intialState = {
  result: [{}]
}

const outputReducer = (state=intialState,action) => {
	switch (action.type) {
		case 'GET_RESULT':
			return {...state, result: action.payload.result}					
		default:
			return state
	}
}

export default outputReducer