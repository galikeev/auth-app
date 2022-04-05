import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../utils/authConsts';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {isLogged: true, user} : {};

const signIn = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                isLogged: true,
                user: action.user
            };
        case LOGIN_SUCCESS:
            return {
                isLogged: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return state;
    }
}

export default signIn;