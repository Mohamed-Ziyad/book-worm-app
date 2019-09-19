import { USER_LOGGED_IN } from '../types';
import api from '../api';

//redux action
export const userLoggedIn = user => ({
	type: USER_LOGGED_IN,
	user,
});

//thunk action
export const login = credentials => dispatch =>
	//api request returns a promise redux-thunk
	api.user
		.login(credentials)
		.then(user => dispatch(userLoggedIn(user) /**redux action */));
