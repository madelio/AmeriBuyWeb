import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import OrderHistory from './components/OrderHistory';
import AccountInfo from './components/AccountInfo';
import AccountPage from './components/AccountPage'
import SideNav from './components/SideNavBar'

export default (
    <Route path ="/account" component={AccountPage}>
        <IndexRoute component={AccountInfo} />
        <Route path="orders" component={OrderHistory} />
    </Route>
);





