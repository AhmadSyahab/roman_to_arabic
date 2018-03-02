export const get_result = () => {
	return {
		type: "GET_RESULT",
	}
}

export const add_result = (countResult) => {
	return (dispatch, getState) => {
		let allResult = getState().outputReducer.result
		allResult.push({
			countResult: countResult,
		})
	}
}

export const add_credits = (countResult, credit) => {
	return (dispatch, getState) => {
		let total = +(countResult.split(' ')[countResult.split(' ').length-2]) * credit;
		let arrResult = countResult.split(' ');
		arrResult.splice(arrResult.length-2,1,total).join(',')
		let allResult = getState().outputReducer.result
		allResult.push({
			countResult: arrResult.join(' '),
		})
	}
}