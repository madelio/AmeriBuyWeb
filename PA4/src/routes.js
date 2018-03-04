import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import OrderHistory from './components/OrderHistory';
import AccountInfo from './components/AccountInfo';
import SideNav from './components/SideNavBar';

export default (
    <Route path ="/" component={AccountPage}>
        <IndexRoute component={AccountInfo} />
        <Route path="/orders" component={OrderHistory} />
    </Route>
    
);

const AccountPage = (props) => <div>{this.props.children}</div>;



