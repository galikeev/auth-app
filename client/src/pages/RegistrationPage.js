import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userActions } from '../actions';

import '../styles/fz.scss';

const RegistrationPage = () => {

    const [registration, setRegistration] = useState(() => {
        return {
            email: '',
			password: '',
            confirmPassword: '',
			firstName: '',
			lastName: '',
			userName:'',
			submitted : false
        }
    });

    const dispatch = useDispatch();

	const handleInputChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
        setRegistration(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
	};

	const submitRegister = (e) => {
		e.preventDefault();
        setRegistration(prev => {
            return {
                ...prev,
                submitted: true
            }
        });
		const { firstName, lastName, userName, email, password, confirmPassword } = registration;
		if (email && password === confirmPassword) {
			dispatch(userActions.register({firstName, lastName, userName, email, password}));
		} 
	}

    return (

        <div className="col-md-4 col-md-offset-4" style={{'margin' : '50px auto 0 auto'}}>
            <h2 className="text-center">Регистрация пользователя</h2>
            <form>
                <div className={'form-group' + (registration.submitted && !registration.firstName ? ' has-error' : '')}>
                    <label className='fz_15'>Имя</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        className="form-control input-shadow" 
                        placeholder="Введите ваше имя" 
                        value={registration.firstName} 
                        onChange={handleInputChange} 
                        name="firstName"
                    />
                    {registration.submitted && !registration.firstName && <div className="help-block text-danger fz_13">Поле обязательно</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.lastName ? ' has-error' : '')}>
                    <label className='fz_15'>Фамилия</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        className="form-control input-shadow" 
                        placeholder="Введите вашу фамилию" 
                        value={registration.lastName} 
                        onChange={handleInputChange} 
                        name="lastName"
                    />
                    {registration.submitted && !registration.lastName && <div className="help-block text-danger fz_13">Поле обязательно</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.userName ? ' has-error' : '')}>
                    <label className='fz_15'>Username:</label>
                    <input 
                        type="text" 
                        id="userName" 
                        className="form-control input-shadow" 
                        placeholder="Введите свой username" 
                        value={registration.userName} 
                        onChange={handleInputChange} 
                        name="userName"
                    />
                    {registration.submitted && !registration.userName && <div className="help-block text-danger fz_13">Поле обязательно</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.email ? ' has-error' : '')}>
                    <label className='fz_15'>Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="form-control input-shadow" 
                        placeholder="Введите email" 
                        value={registration.email} 
                        onChange={handleInputChange} 
                        name="email"
                    />
                    {registration.submitted && !registration.email && <div className="help-block text-danger fz_13">Поле обязательно</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.password ? ' has-error' : '')}>
                    <label htmlFor="password" className='fz_15'>Пароль: </label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control input-shadow" 
                        placeholder="Введите пароль" 
                        value={registration.password}
                        onChange={handleInputChange} 
                        name="password" 
                        autoComplete="off"
                    />
                    {registration.submitted && !registration.password && <div className="help-block text-danger fz_13">Поле обязательно</div> }
                </div>
                <div className={'form-group' + (registration.submitted && !registration.confirmPassword ? ' has-error' : '')}>
                    <label htmlFor="password" className='fz_15'>Подтверждение пароля: </label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        className="form-control input-shadow" 
                        placeholder="Повторите пароль" 
                        value={registration.confirmPassword}
                        onChange={handleInputChange} 
                        name="confirmPassword" 
                        autoComplete="off"
                    />
                    {registration.submitted && registration.confirmPassword !== registration.password && <div className="help-block text-danger fz_13">Пароли не совпадают</div> }
                </div>
                <div style={{'marginTop' : '10px'}}>
                    <button 
                        type="button" 
                        onClick={submitRegister} 
                        className="btn btn-primary btn-block"
                    >
                        Зарегистрироваться
                    </button>
                    <Link to="/login" className="btn btn-link">Войти</Link>
                </div>
            </form>
        </div>
    )
};

export default RegistrationPage;