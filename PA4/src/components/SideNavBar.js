import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/OrderHistory.css';

class SideNav extends React.Component {
    render() {
        const buttonStyle = {
            borderRadius : "0 px 10 px",
            width: "100%",
            margin: "0 px",
            padding: "15px 10px",
            backgroundColor : "#182C6E",
            border : "none",
            color : "#A4B4E7"
        };

        const navStyle = {
            backgroundColor : "#475FAB",
            color : "white",
            float : "left",
            textAlign : "center",
            width : "15%",
            paddingBottom :  "100%",
            paddingTop : "5%"
        };
        return (
            <div>
            <ul id="sideBarUL"><li id="toolbar-header"><h3>Welcome!</h3></li>
                <li id="sideNavBtn"><button className="sideBtn" id="actBtn" type="button">Account</button></li>
                <li id="sideNavBtn"><button className="sideBtn" id="orderBtn" type="button">Orders</button></li>
                <li id="sideNavBtn"><button className="sideBtn" id="signoutBtn" type="button">Sign Out</button></li>
            </ul>
            </div>
        );
    }
}

export default SideNav;