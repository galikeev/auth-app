import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import {REGISTRATION_ROUTE} from '../utils/routesConsts';

import '../styles/fz.scss';

const mapState = (state) => {
	const { isLogged } = state;
	return { isLogged };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout
};

const Login = connect(mapState, actionCreators)((props) => {

    props.logout();

    const [login, setLogin] = useState(() => {
        return {
            email: '',
            password: '',
            submitted: false
        }
    })

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
			props.login(email, password);
		}
	}

    return (
        <div className="col-md-4 col-md-offset-4" style={{'margin' : '50px auto 0 auto'}}>
            <h2 className="text-center">User Login</h2>
                <form name="form">
                    <div className={'form-group' + (login.submitted && !login.email ? ' has-error' : '')}>
                        <label htmlFor="email" className='fz_15'>Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            className="form-control input-shadow" 
                            placeholder="Enter Email" 
                            value={login.email} 
                            onChange={handleInputChange} 
                            name="email"
                        />
                        {login.submitted && !login.email && <div className="help-block text-danger fz_13">Email is required</div> }
                    </div>
                    <div className={'form-group' + (login.submitted && !login.password ? ' has-error' : '')}>                    
                        <label className='fz_15'>Password: </label>
                        <input 
                            type="password" 
                            id="exampleInputPassword" 
                            className="form-control input-shadow" 
                            placeholder="Enter Password" 
                            value={login.password}	
                            onChange={handleInputChange} 
                            name="password" 
                            autoComplete="off"
                        />
                        {login.submitted && !login.email && <div className="help-block text-danger fz_13">Password is required</div> }
                    </div>
                    <div style={{'marginTop' : '10px'}}>
                        <button 
                            type="button" 
                            onClick={submitLogin} 
                            className="btn btn-primary btn-block"
                        >
                            Sign In
                        </button>
                        <Link to={REGISTRATION_ROUTE} className="btn btn-link">Register</Link>
                    </div>
                </form>
        </div>
    )
});


export default Login;