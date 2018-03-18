import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router'; 
import routes from './routes';
import './styles/style.css';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>	
	<Router history={browserHistory} routes={routes}/>
</Provider>
	, document.getElementById('app')
);

export default createStoreWithMiddleware;