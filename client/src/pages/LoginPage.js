import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions';
import {REGISTRATION_ROUTE} from '../utils/routesConsts';

import '../styles/fz.scss';


const Login = () => {

    const [login, setLogin] = useState(() => {
        return {
            email: '',
            password: '',
            submitted: false
        }
    });

    const dispatch = useDispatch();

	const handleInputChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setLogin(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
	}

	const submitLogin = (e) => {
		e.preventDefault();
        setLogin(prev => {
            return {
                ...prev,
                submitted: true
            }
        });
		const { email, password } = login;
		if (email && password) {
			dispatch(userActions.login(email, password));
		}
	}

    return (
        <div className="col-md-4 col-md-offset-4" style={{'margin' : '50px auto 0 auto'}}>
            <h2 className="text-center">Авторизация</h2>
                <form name="form">
                    <div className={'form-group' + (login.submitted && !login.email ? ' has-error' : '')}>
                        <label htmlFor="email" className='fz_15'>Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            className="form-control input-shadow" 
                            placeholder="Введите email" 
                            value={login.email} 
                            onChange={handleInputChange} 
                            name="email"
                        />
                        {login.submitted && !login.email && <div className="help-block text-danger fz_13">Введите email!</div> }
                    </div>
                    <div className={'form-group' + (login.submitted && !login.password ? ' has-error' : '')}>                    
                        <label className='fz_15'>Пароль: </label>
                        <input 
                            type="password" 
                            id="exampleInputPassword" 
                            className="form-control input-shadow" 
                            placeholder="Введите пароль" 
                            value={login.password}	
                            onChange={handleInputChange} 
                            name="password" 
                            autoComplete="off"
                        />
                        {login.submitted && !login.email && <div className="help-block text-danger fz_13">Введите пароль!</div> }
                    </div>
                    <div style={{'marginTop' : '10px'}}>
                        <button 
                            type="button" 
                            onClick={submitLogin} 
                            className="btn btn-primary btn-block"
                        >
                            Войти
                        </button>
                        <Link to={REGISTRATION_ROUTE} className="btn btn-link">Регистрация</Link>
                    </div>
                </form>
        </div>
    )
};


export default Login;