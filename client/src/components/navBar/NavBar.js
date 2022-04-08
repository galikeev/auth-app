import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userActions } from '../../actions';

import Logo from '../../assets/img/reactjs-icon.svg';
import './navBar.scss';

const NavBar = () => {

    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.signIn.isLogged);
    const user = useSelector(state => state.signIn.user);

    return (
        <div className="navbar">
            <NavLink to="/" className="navbar__logo">
                <img src={Logo} alt="logo" className="navbar__logo"/>
                <div className="navbar__item">AUTH APP</div>
            </NavLink>
            <div className="navbar__wrapper">
                {!isLogged && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
                {!isLogged && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                {isLogged && user.user ? <div>{user.user.firstName} {user.user.lastName}</div> : null}
                {isLogged && <button className="navbar__logout btn btn-primary btn-block" onClick={() => dispatch(userActions.logout())}>Выйти</button>}
            </div>
        </div>
    );
};

export default NavBar;