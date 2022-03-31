import { BrowserRouter } from "react-router-dom";

import AppRouter from "../appRouter/AppRouter";

const App = () => {
	return (
		<BrowserRouter>
			<AppRouter/>
		</BrowserRouter>
	);
}

export default App;
