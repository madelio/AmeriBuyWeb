import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import OrderHistory from './components/OrderHistory';
import AccountInfo from './components/AccountInfo';
import AccountPage from './components/AccountPage';
import SideNav from './components/SideNavBar';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';

export default (
    <Route path="/">
        <Route path ="account" component={AccountPage}>
            <IndexRoute component={AccountInfo} />
            <Route path="orders" component={OrderHistory} />
        </Route>
        <Route path="checkout">
            <IndexRoute component={Checkout} />
            <Route path="success" component={OrderSuccess} />
        </Route>
    </Route>

);





