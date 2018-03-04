import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Checkout.css'
import { OrderBuilder, ItemBuilder, getRealOrder, getFakeOrder } from './OrderHistory';
import { Link } from 'react-router';

class ShoppingCart extends React.Component {

    render() {

       
        
        var orders = [];

        var order = getFakeOrder(orders);
       
        /* real order */
        //getRealOrder(orders);
        /* fake order */


        var vendors = order.itemSummary;
        var headerBuilder = vendors.map((vendor) => 
            htmlStr(vendor,order)
        ); 

        function htmlStr(vendor, order) {

            var header = <tr><th className = "urlheader"> {vendor.name} ( {vendor.qty} items</th></tr>;
            
                var itemList = order.items.filter(item => item.vendor == vendor.name);
            
            var listBuilder = itemList.map((item) => 
                <tr><td className = "urllist">{item.url}</td></tr>
            );

            return <div>{header}{listBuilder}</div>
        }
        


        return (
            <div className="shoppingcart">
            <table className="shoppingcart-table" id="shoppingcart-elements">
                <caption><h2>My Shopping Cart</h2></caption>
                {headerBuilder}
    
            </table>
    
                <Link to="/checkout/success"><input id ="submitBtn" type="submit" value="Place Order" /></Link>
    
                </div>

        );
    }
}

export default ShoppingCart;