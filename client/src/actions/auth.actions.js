import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE } from '../utils/authConsts';
import { authService } from '../services/AuthService';
import { alertActions } from './alert.actions';
import { history } from '../services/history';

const login = (email, password) => {
    return dispatch => {

        authService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                    dispatch(alertActions.success('Login successful'));
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 3000)
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

const logout = () => {
    authService.logout();
    return { type: LOGOUT };
}

const register = (user) => {
    return dispatch => {

        authService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 3000)
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type: REGISTER_FAILURE, error } }
}

export const userActions = {
    login,
    logout,
    register,
};
