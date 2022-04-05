import { BrowserRouter } from "react-router-dom";
import AppRouter from "../appRouter/AppRouter";


const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<AppRouter/>
			</BrowserRouter>
		</div>
	);
}

export default App;