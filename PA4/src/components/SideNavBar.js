import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class SideNav extends React.Component {
    render() {
        const buttonStyle = {
            borderRadius : "0 px 10 px",
            width: "100%",
            margin: "0 px",
            padding: "10px",
            backgroundColor : "#182C6E",
            border : "none",
            color : "#A4B4E7"
        };

        const navStyle = {
            backgroundColor : "#475FAB",
            color : "white",
            float : "left",
            textAlign : "center",
            width : "20%",
            paddingBottom :  "100%",
            paddingTop : "5%"
        };

        const ulStyle = {
           listStyle : "none",
           margin: 0,
           padding: 0

        }
        return (
            <div style={navStyle}>
            <ul id="sideBarUL" style={ulStyle}><li id="toolbar-header"><h3>Welcome!</h3></li>
                <li id="sideNavBtn"><Link to="/account"><button style={buttonStyle} className="sideBtn" id="actBtn" type="button">Account</button></Link></li>
                <li id="sideNavBtn"><Link to="/account/orders"><button style={buttonStyle} className="sideBtn" id="orderBtn" type="button">Orders</button></Link></li>
                <li id="sideNavBtn"><button style={buttonStyle} className="sideBtn" id="signoutBtn" type="button">Sign Out</button></li>
            </ul>
            </div>
        );
    }
}

export default SideNav;