import { CREATE_RESIDENCE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		default:
			return state;
	}
};
