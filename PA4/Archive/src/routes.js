import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HomePage from './components/home';
import FAQ from './components/faq';
import login from './components/login';
import signup from './components/signup';
import AccountPage from './components/AccountPage';
import AccountInfo from './components/AccountInfo';
import OrderHistory from './components/OrderHistory.js';
import Checkout from './components/Checkout.js';
import AddItem from './components/AddItem.js';
import OrderSuccess from './components/OrderSuccess.js';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="faq" component={FAQ}/>
		<Route path="login" component={login}/>
		<Route path="signup" component={signup}/>
		<Route path="account" component={AccountPage}>
			<IndexRoute component={AccountInfo}/>
			<Route path="orders" component={OrderHistory}/>
		</Route>
		<Route path="checkout">
			<IndexRoute component={Checkout}/>
			<Route path="success" component={OrderSuccess}/>
		</Route>
		<Route path="addItem" component={AddItem}/>
		
		
	</Route>
);