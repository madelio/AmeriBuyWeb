import React from 'react';
import ReactDOM from 'react-dom';

class AccountInfo extends React.Component {
    render() {
        return (
            <div id="accountInfoComponent">
                <nav id="sideNav"></nav>
                <div id="edit-account">
                    <h1>Manage your Account</h1>
                    <div class="innerinfo">
                        <label for="fname">First Name: </label>
                        <input type= "text" id="fname" name="firstname" />
                        <br />
                        <label for="lname">Last Name: </label>
                        <input type= "text" id="lname" name="lastname" />
                        <br />
                        <label for="email">Email: </label>
                        <input type= "text" id="email" name="email" />
                        <br />
                        <label for="phone">Phone: </label>
                        <input type= "text" id="phone" name="phone" />
                        <br />
                    </div>
                    <div class="addressInfo">
                        <label for="address">Address: </label>
                        <input type= "text" id="address" name="address" />
                        <br />
                        <label for="city">City: </label>
                        <input type= "text" id="city" name="city" />
                        <br />
                        <label for="state">State: </label>
                        <input type= "text" id="state" name="state" />
                        <br />
                        <label for="zip">Zip: </label>
                        <input type= "text" id="zip" name="zip" />
                    </div>
                </div>
                <script src="Customer.js"></script>
                <script src="navBar.js"></script>
                <script src="sideNavBar.js"></script>

            </div>
        );
    }
}

export default AccountInfo;