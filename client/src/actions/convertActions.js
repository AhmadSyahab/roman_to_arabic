export const get_data = () => {
	return {
		type: "GET_DATA",
	}
}

export const add_data = (stringData, dataRoman) => {
	return (dispatch, getState) => {
		let allData = getState().convertReducer.data
		allData.push({
			stringData: stringData,
			romanData: dataRoman
		})
	}
}