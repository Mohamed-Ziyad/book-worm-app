import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';

//redux store
const store = createStore(
	rootReducer,
	//adding dev tool
	composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'),
);

serviceWorker.unregister();
