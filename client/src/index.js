import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/app/App';
import store from './store';

import './styles/style.scss'

ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
	document.getElementById('root')
);
