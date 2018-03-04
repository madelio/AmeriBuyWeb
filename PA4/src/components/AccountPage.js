import SideNav from './SideNavBar';
import React from 'react';
import ReactDOM from 'react-dom';


class AccountPage extends React.Component {
    render() {
        return (
            <div>
                <SideNav />
                {this.props.children}
            </div>
        );
    }
}

export default AccountPage;