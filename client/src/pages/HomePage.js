import { useSelector } from "react-redux";


const HomePage = () => {

	const user = useSelector(state => state.signIn.user);

		return (
			<div className="text-center" style={{'marginTop': '50px'}}>
				<h2>Login Successful!</h2>
				<h3>Hello {user.user.userName}</h3>
			</div>
		)
};

export default HomePage;
