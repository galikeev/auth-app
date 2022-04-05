import { BrowserRouter } from "react-router-dom";

import NavBar from "../navBar/NavBar";
import AppRouter from "../appRouter/AppRouter";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<NavBar/>
				<AppRouter/>
			</BrowserRouter>
		</div>
	);
}

export default App;
