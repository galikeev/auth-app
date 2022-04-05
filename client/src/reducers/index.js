import { combineReducers } from "redux";

import signIn from "./signIn.reducer";
import signUp from "./signUp.reducer";
import alert from "./alert.reducer";

const reducer = combineReducers({
	signIn,
	signUp,
	alert
});

export default reducer;