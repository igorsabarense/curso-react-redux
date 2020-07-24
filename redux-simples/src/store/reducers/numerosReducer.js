import {
    MIN_NUMBER_CHANGED,
    MAX_NUMBER_CHANGED
} from '../actions/actionTypes'

const initialState = {
	min: 1,
	max: 10
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MIN_NUMBER_CHANGED:
			return {
				...state,
				min: action.payload
			};
		case MAX_NUMBER_CHANGED:
			return {
				...state,
				max: action.payload
			};
		default:
			return state;
	}
}
