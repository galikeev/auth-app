import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../actions';
import { LOGIN_ROUTE } from '../utils/routesConsts';

const mapState = (state) => {
	const { isLogged } = state;
	return { isLogged };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout
};

const HomePage = connect(mapState, actionCreators)(() => {

		return (
			<div className="text-center">
				<h2>Login Successful!</h2>
				<h3>Welcome to Home Page</h3>
				<button className="btn btn-primary">Home</button>
				<Link  className="dropdown-item" to={LOGIN_ROUTE}>Logout</Link>
			</div>
		)
});

export default HomePage;
