import _ from 'lodash';
import {
	CREATE_RESIDENCE,
	DELETE_RESIDENCE,
	EDIT_RESIDENCE,
	FETCH_RESIDENCE,
	FETCH_RESIDENCES,
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		case FETCH_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		case EDIT_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		case DELETE_RESIDENCE:
			return _.omit(state, action.payload);

		default:
			return state;
	}
};
