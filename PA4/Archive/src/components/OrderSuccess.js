import React from 'react';
import { Link } from 'react-router';
import '../styles/OrderSuccessStyle.css';
import { user } from '../api/customerApi';
import { OrderBuilder, ItemBuilder, getRealOrder, getFakeOrder } from './OrderHistory';

class OrderSuccess extends React.Component {


    render() {
        const style = {

            border: "1px solid #ddd",
            width: "80%"

        }
        var orders = [];

        var order = getFakeOrder(orders);
        var total = 0;
        var vendors = order.itemSummary;
        var vendorshtml = vendors.map((vendor) =>
            htmlStr(vendor)
        );

        function htmlStr(vendor) {

            var header = <tr><td> {vendor.name} </td><td> {vendor.qty} </td></tr>;
            total += vendor.qty;

            return header;
        }



        var thanksMssg;
        var customerDets;
        if (user != null) {
            thanksMssg = <div>Thank You for your order { user.first } !</div>
            customerDets = <div><br /><b>Customer Name:</b> {user.fullname}
            <br /><b>Email:</b> {user.email}
            <br /><b>Phone:</b>  {user.phone }
            <br /><b>Address:</b> {user.fulladdress}</div>

        }


        return (
            <div>
            <div><header><h1>Your order request has been successfully received!</h1></header></div>

            <div className="LHS">
                <div className="LHSVals">
                    <div id="OrderID">
                    </div>
                    <div id="CustomerDetails">{customerDets}
                    </div>
                </div>
                <div className="LHSVals" id="OrderSummary">
                    <table id = "orderTable" style={style}>
                        <caption>Order Summary</caption>
                        <tr>
                            <th>Vendor</th>
                            <th>Qty</th>
                            </tr>
                            {vendorshtml}

                    </table>
                </div>
            </div>

            <div className="RHS">
                <div className="ThankYou">
                    <h2 id="thanksMssg">{thanksMssg}</h2>
                </div>
                <div className="Disclaimer">

                    <p id="estDates">Item pricing subject to buyer
                    </p>
                </div>
            </div>
            </div>
        );
    }
}

export default OrderSuccess;
