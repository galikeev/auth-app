import { BrowserRouter } from "react-router-dom";

import NavBar from "../navBar/NavBar";
import AppRouter from "../appRouter/AppRouter";
import { history } from "../../services/history";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter history={history}>
				<NavBar/>
				<AppRouter/>
			</BrowserRouter>
		</div>
	);
}

export default App;
