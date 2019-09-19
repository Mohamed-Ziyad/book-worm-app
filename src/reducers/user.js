import { USER_LOGGED_IN } from '../types';

export default function user(state = {}, action = {}) /**initial state */ {
	switch (action.type) {
		case USER_LOGGED_IN:
			return action.user;
		default:
			return state;
	}
}
