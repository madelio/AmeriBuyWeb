import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Checkout.css'
import { OrderBuilder, ItemBuilder } from './OrderHistory';
import { Link } from 'react-router';

class ShoppingCart extends React.Component {

    render() {
        
        var orders = [];
        var orderCount = parseInt(localStorage.getItem("count"));
        console.log("COUNT IS " + orderCount);
        var itemArray = []
        for (var ct = 0; ct  < orderCount; ct++) {
            var itemStr = "item" + ct;
            console.log("ITEM STRING IS " + itemStr);
            var item = JSON.parse(localStorage.getItem(itemStr));
            console.log("ITEM VALUE " + item);

            itemArray.push(new ItemBuilder(item[0], item[2]))
        }


        var order = new OrderBuilder(itemArray);
        orders.push(order);


        var vendors = order.itemSummary;
        var headerBuilder = vendors.map((vendor) => 
        <tr><th className = "urlheader"> {vendor.name} ( {vendor.qty} items</th></tr>
        ); 
        /*
        var itemList = order.items.filter(item => item.vendor == vendors[x].name);
        var listBuilder = itemList.map((item) => 
            <tr><td className = "urllist">{item.url}</td></tr>
        ); */

        
/*
        for (var x = 0; x < vendors.length; x++) {
            var headerBuilder = "<tr><th class ='urlheader'>" + vendors[x].name +
            "(" + vendors[x].qty + " items)</th></tr>"
            var listBuilder = "";
            var itemList = order.items.filter(item => item.vendor == vendors[x].name);
            for (var y = 0; y < itemList.length; y++) {
                var item = itemList[y];
                listBuilder += "<tr><td class = 'urllist'>" + item.url + "</td></tr>";
            }

            htmlStr += headerBuilder + listBuilder;
            console.log("html Str is " + htmlStr);
        }

    shoppingcart.innerHTML = htmlStr; */
        return (
            <div className="shoppingcart">
            <table className="shoppingcart-table" id="shoppingcart-elements">
                <caption><h2>My Shopping Cart</h2></caption>
    
            </table>
    
                <Link to="/checkout/success"><input id ="submitBtn" type="submit" value="Place Order" /></Link>
    
                </div>

        );
    }
}

export default ShoppingCart;