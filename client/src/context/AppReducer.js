export default (state, action) => {
	switch (action.type) {
		case 'GET_TRANSACTION':
			return {
				...state,
				loading: false,
				transcations: action.payload
			};
		case 'DELETE_TRANSCATION':
			return {
				...state,
				transcations: state.transcations.filter((transcation) => transcation._id !== action.payload)
			};
		case 'ADD_TRANSCATION':
			return {
				...state,
				transcations: [ ...state.transcations, action.payload ]
			};
		case 'TRANSACTION_ERROR':
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
