import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/OrderHistory.css';


class OrderHistory extends React.Component {
 
    render() {
        return (
            <div>
            <div className="orders">
                <h1>My Orders</h1>
            <table id="orderHistory">
            </table>
            </div>
            <style>
                       
            </style>
            <script src="ordersApi.js"></script>
            <script src="customerApi.js"></script>
            <script src="sideNavBar.js"></script>
            </div>
        );
    }
}

export default OrderHistory;