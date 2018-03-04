import React from 'react';
import { Link } from 'react-router';
import '../styles/OrderSuccessStyle.css'

class OrderSuccess extends React.Component {
    render() {
        const style = {
            
            border: "1px solid #ddd",
            width: "80%"
              
        }
        return (
            <div>
            <div><header><h1>Your order request has been successfully received!</h1></header></div>

            <div className="LHS">
                <div className="LHSVals">
                    <div id="OrderID">
                    </div>
                    <div id="CustomerDetails">
                    </div>
                </div>
                <div className="LHSVals" id="OrderSummary">
                    <table id = "orderTable" style={style}>
                        <caption>Order Summary</caption>
                        <tr>
                            <th>Vendor</th>
                            <th>Qty</th>
                        </tr>
                    </table>
                </div>
            </div>
        
            <div className="RHS">
                <div className="ThankYou">
                    <h2 id="thanksMssg"></h2>
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