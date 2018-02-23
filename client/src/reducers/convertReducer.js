const intialState = {
  data: [{}]
}

const convertReducer = (state=intialState,action) => {
	switch (action.type) {
		case 'ADD_PM':
			const newdata = state.data.concat(action.payload.data)
			return {...state, data: newdata}
		case 'GET_DATA':
			return {...state, data: action.payload.data}					
		default:
			return state
	}
}

export default convertReducer