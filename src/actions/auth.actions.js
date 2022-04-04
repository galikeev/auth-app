import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../utils/authConsts';
import { authService } from '../services/AuthService';
import { alertActions } from './alert.actions';
import { history } from '../services/history';

const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        authService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

const logout = () => {
    authService.logout();
    return { type: LOGOUT };
}

const register = (user) => {
    return dispatch => {
        dispatch(request(user));

        authService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: REGISTER_REQUEST, user } }
    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type: REGISTER_FAILURE, error } }
}

export const userActions = {
    login,
    logout,
    register,
};
