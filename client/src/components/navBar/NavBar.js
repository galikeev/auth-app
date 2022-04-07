import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userActions } from '../../actions';

import Logo from '../../assets/img/reactjs-icon.svg';
import './navBar.scss';

const NavBar = () => {

    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.signIn.isLogged);

    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <img src={Logo} alt="logo" className="navbar__logo"/>
                <a href="1" className="navbar__header">AUTH APP</a>
            </div>
            <div className="navbar__wrapper">
                {!isLogged && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
                {!isLogged && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                {isLogged && <button className="navbar__logout btn btn-primary btn-block" onClick={() => dispatch(userActions.logout())}>Выйти</button>}
            </div>
        </div>
    );
};

export default NavBar;