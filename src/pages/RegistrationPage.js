import { useState } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

const mapState = (state) => {
    const { isRegistered } = state;
    return { isRegistered };
}

const actionCreators = {
    register: userActions.register
}

const RegistrationPage = connect(mapState, actionCreators)((props) => {

    const [registration, setRegistration] = useState(() => {
        return {
            email: '',
			password: '',
			firstName: '',
			lastName: '',
			userName:'',
			submitted : false
        }
    });


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
		const { firstName, lastName, userName, email, password } = registration.state;
		if (email && password) {
			props.register({firstName, lastName, userName, email, password});
		}
	}

    return (

        <div className="col-md-4 col-md-offset-4">
            <h2 className="text-center">User Registration</h2>
            <form>
                <div className={'form-group' + (registration.submitted && !registration.firstName ? ' has-error' : '')}>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        className="form-control input-shadow" 
                        placeholder="Enter First Name" 
                        value={registration.firstName} 
                        onChange={handleInputChange} 
                        name="firstName"
                    />
                    {registration.submitted && !registration.firstName && <div className="help-block">First Name is required</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.lastName ? ' has-error' : '')}>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        className="form-control input-shadow" 
                        placeholder="Enter Last Name" 
                        value={registration.lastName} 
                        onChange={handleInputChange} 
                        name="lastName"
                    />
                    {registration.submitted && !registration.lastName && <div className="help-block">Last Name is required</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.userName ? ' has-error' : '')}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        id="userName" 
                        className="form-control input-shadow" 
                        placeholder="Enter user name" 
                        value={registration.userName} 
                        onChange={handleInputChange} 
                        name="userName"
                    />
                    {registration.submitted && !registration.userName && <div className="help-block">username is required</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.email ? ' has-error' : '')}>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="form-control input-shadow" 
                        placeholder="Enter Email" 
                        value={registration.email} 
                        onChange={handleInputChange} 
                        name="email"
                    />
                    {registration.submitted && !registration.email && <div className="help-block">Email is required</div>}
                </div>
                <div className={'form-group' + (registration.submitted && !registration.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control input-shadow" 
                        placeholder="Enter Password" 
                        value={registration.password}
                        onChange={handleInputChange} name="password" autoComplete="off"
                    />
                    {registration.submitted && !registration.firstName && <div className="help-block">Password is required</div> }
                </div>
                <button 
                    type="button" 
                    onClick={submitRegister} 
                    className="btn btn-primary btn-block"
                >
                    Register
                </button>
                <Link to="/login" className="btn btn-link">Login</Link>
            </form>
        </div>
    )
})

export default RegistrationPage;