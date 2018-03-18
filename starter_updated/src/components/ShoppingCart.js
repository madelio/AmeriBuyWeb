import React from 'react';
import ReactDOM from 'react-dom';
import { OrderBuilder, ItemBuilder, getRealOrder, getFakeOrder } from './OrderHistory';
import { Link } from 'react-router';

class ShoppingCart extends React.Component {

    render() {

        const tableStyle = {
            backgroundColor: "white",
            boxShadow: "1px 1px 5px"
           };
        
        var orders = [];

        var order = getRealOrder(orders);
       
        /* real order */
        //getRealOrder(orders);
        /* fake order */
        var headerBuilder;
       
        
        if (order == null) {
            headerBuilder = <div><h4>No Items in your Shopping Cart :( </h4></div>
           
        } else {
        console.log("MUCHACAH");
        
        var vendors = order.itemSummary;
        headerBuilder = vendors.map((vendor) => 
            htmlStr(vendor,order)
        ); 

        function htmlStr (vendor, order)  {

            var header = <tr><th className = "urlheader"> {vendor.name} ( {vendor.qty} items</th></tr>;
            
                var itemList = order.items.filter(item => item.vendor == vendor.name);
            
            var listBuilder = itemList.map((item) => 
                <tr><td className = "urllist">{item.url}</td></tr>
            );

            return <tbody>{header}{listBuilder}</tbody>
        }
    }
        


        return (
            <div className="shoppingcart">
            <table className="shoppingcart-table" id="shoppingcart-elements" style={tableStyle}>
                <caption><h2>My Shopping Cart</h2></caption>
                {headerBuilder}
    
            </table>
    
            <Link to="/checkout/success"><input id ="submitBtn" type="submit" value="Place Order" /></Link>
    
                </div>

        );
    }
}

export default ShoppingCart;