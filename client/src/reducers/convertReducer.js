const intialState = {
  data: [{}]
}

const convertReducer = (state=intialState,action) => {
	switch (action.type) {
		case 'GET_DATA':
			return {...state, data: action.payload.data}					
		default:
			return state
	}
}

export default convertReducer