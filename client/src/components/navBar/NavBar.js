import Logo from '../../assets/img/reactjs-icon.svg';

import './navBar.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <img src={Logo} alt="logo" className="navbar__logo"/>
                <a href="1" className="navbar__header">AUTH APP</a>
            </div>
            <div className="navbar__wrapper">
                <div className="navbar__login">Войти</div>
                <div className="navbar__registration">Регистрация</div>
            </div>
        </div>
    );
};

export default NavBar;