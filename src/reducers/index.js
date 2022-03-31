import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../utils/authConsts";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {logged: true, user} : {}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
			return { registering: true };
		case REGISTER_SUCCESS:
			return {};
		case REGISTER_FAILURE:
			return {};
		case LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user
			};
		case LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user
			};
		case LOGIN_FAILURE:
			return {};
		case LOGOUT:
			return {};
		default:
			return state
	}
}

export default reducer;