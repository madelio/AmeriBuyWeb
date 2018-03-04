import SideNav from './SideNavBar';
import React from 'react';
import ReactDOM from 'react-dom';
import { user, userLoggedIn } from '../api/customerApi'
import {Link} from 'react-router';


class AccountPage extends React.Component {
    
    render() {
    
            return <div><SideNav />{this.props.children}</div>
        
    }
}

export default AccountPage;