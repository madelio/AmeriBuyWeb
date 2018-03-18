import React from 'react';
import ReactDOM from 'react-dom';


class OrderHistory extends React.Component {

    render() {

        const h1Style = {

                padding: "20px",
                color: "#475FAB"



        }

        const thStyle = {

                backgroundColor: "#475FAB",
                color: "white",
                padding: "20px"
        }


        var idCtrPre = 1001;
        var idCtrPost = 28;
        var randomizer = 4;

        var orders = [];

        //previous order
        var itemPrev1 = new ItemBuilder("Forever21", "forver21.com/tshirt");
        itemPrev1.price = 20.00;
        var itemPrev2 = new ItemBuilder("FootLocker", "footlocker.com/whitetop");
        itemPrev2.price = 90.50;
        var itemPrev3 =new ItemBuilder("FootLocker", "footlocker.com/3421903");
        itemPrev3.price = 53.76;

        var prevItems = [itemPrev1, itemPrev2, itemPrev3];
        var prevOrder = new OrderBuilder(prevItems);
        prevOrder.placed = new Date("1/15/2018");
        pushOrderDelivery(prevOrder);
        prevOrder.itemSummary = (buildOrderSummary(prevItems, true)).vendorList;
        prevOrder.totalPrice = (buildOrderSummary(prevItems, true)).total;
        orders.push(prevOrder);


        /* real order */

        getRealOrder(orders);

       var orderStr = orders.map(convertOrdertoHTML);
       var htmlStr = <tbody><tr><td><table className='order-items'>{orderStr}</table></td></tr></tbody>;

       function convertOrdertoHTML (order) {
           var vendors = order.itemSummary;
           var vendorHtml = vendors.map((vendor, index) => orderCallBack(vendor, order, index, vendors.length));

           return (
               <tbody key={order.id}>
            <tr><th style = {thStyle}>Order#: {order.id}  </th>
                <th style={thStyle}>Placed { new Date(order.placed).toLocaleDateString('en-us') } </th>
                <th style={thStyle}>Details</th></tr>
            {vendorHtml}</tbody>
           );
       }
       function orderCallBack(vendor, currOrder, index, len) {
            var vendorStrDets;
            if (currOrder.processed == false) {
            vendorStrDets = <td> Est Price Pending </td>;
            } else {
                vendorStrDets = <td> Est Price: $ { vendor.price }</td>;
            }
            var vendorPriceText;
            if(currOrder.processed == false) {
            vendorPriceText = <div>Pending<br /><br /></div>
            } else {
                vendorPriceText =<div><b id='total'>$ {currOrder.totalPrice } </b><br /><br /><button className='orderBtn' id='approveBtn'>Approve Price</button><br /></div>
            }
            return (
            <tr>
                <td><b> {vendor.name} </b> ({vendor.qty} items) : </td>
                {vendorStrDets}
                {index == 0 && <td className='total' rowSpan={len}>Total:<br /> {vendorPriceText} <button className='orderBtn' id='cancelBtn'>Request Cancellation</button></td>}
            </tr>
            );
       }

        return (
            <div>
                <div className="orders">
                    <h1 style={h1Style}>My Orders</h1>
                <table id="orderHistory">

                    {htmlStr}

                </table>
                </div>
            </div>
        );
    }
}

export default OrderHistory;

export function OrderBuilder(items) {
    console.log("building order with items: " + items[0].vendor);
    this.id = idCtrPre + "-" + idCtrPost;
    idCtrPre = idCtrPre + 2*randomizer;
    idCtrPost = idCtrPost + ((4*randomizer)%30);
    this.items = items;
    this.placed = Date.now();
    this.itemSummary = (buildOrderSummary(items, false)).vendorList;
    this.estArrivalRange = 7;
    this.received = true;
    this.processed = false;
    this.shipped = false;
    this.delivered = false;
}

var idCtrPre = 1001;
var idCtrPost = 28;
var randomizer = 4;

export function buildOrderSummary(items, processedBool) {
var vendors = [];
var totalPrice = 0.00;

console.log("Building Order Summary");
console.log("item count: " + items.length);
for (var i = 0; i < items.length; i ++) {
var item = items[i];
console.log("searching for " + item.vendor + "...");
var itemInd = vendorExists(item.vendor, vendors);
console.log("item index is ")
if (itemInd != -1) {
    console.log(item.vendor + " found!");
    var vendor = vendors[itemInd];
    vendor.qty += item.qty;
    if (processedBool) {
        vendor.price += item.price;
        totalPrice += vendor.price;
    }
} else {
    console.log(item.vendor + " not found!");
    console.log("Adding new vendor " + item.vendor + " with qty " + item.qty)
    var newVendor = new VendorBuilder(item.vendor, item.qty);
    if (processedBool) {
        newVendor.price = item.price;
        totalPrice += newVendor.price;
    }
    vendors.push(newVendor);
}
}
console.log("Vendors returned are: " + vendors);

var summary = {
vendorList : vendors,
total : totalPrice
}
return summary;
}

export function VendorBuilder(name, qty) {
this.name = name;
this.qty = qty;
}

export function ItemBuilder(vendor, url) {
this.vendor = vendor;
this.url = url;
this.qty = 1;
this.price = 0.00;
}

export function vendorExists(vendorName, vendors) {
for (var k = 0; k < vendors.length; k++) {
var vendor = vendors[k];
if (vendor.name == vendorName) {
    return k;
}
}
return -1;
}



export function pushOrderDelivery(order) {
order.received = true;
order.processed = true;
order.shipped = true;
order.delivered = true;

order.receivedDate = order.placedDate;
order.processed = addDays(order.placedDate, 1);
order.shipped = addDays(order.placedDate, 3);
order.delivered = addDays(order.placedDate, order.estArrivalRange);
}

// Date Info
export function addDays(date, days) {
var result = new Date(date);
result.setDate(result.getDate() + days);
return result;
}

const tableStyle = {
        backgroundColor: "white",
        boxShadow: "1px 1px 5px"
       };
//real order
export function getRealOrder(orders) {
    if (localStorage.getItem("count") != null ) {
        var orderCount = parseInt(localStorage.getItem("count"));

        var itemArray = []
        for (var ct = 0; ct  < orderCount; ct++) {
            var itemStr = "item" + ct;
            var item = JSON.parse(localStorage.getItem(itemStr));

            itemArray.push(new ItemBuilder(item[0], item[2]))
        }
        var order = new OrderBuilder(itemArray);
        orders.push(order);

        return order;
    }
}

export function getFakeOrder(orders) {
    var itemPrev1 = new ItemBuilder("Forever21", "forver21.com/tshirt");
        itemPrev1.price = 20.00;
        var itemPrev2 = new ItemBuilder("FootLocker", "footlocker.com/whitetop");
        itemPrev2.price = 90.50;
        var itemPrev3 =new ItemBuilder("FootLocker", "footlocker.com/3421903");
        itemPrev3.price = 53.76;

        var prevItems = [itemPrev1, itemPrev2, itemPrev3];
        var prevOrder = new OrderBuilder(prevItems);
        prevOrder.placed = new Date("1/15/2018");
        pushOrderDelivery(prevOrder);
        prevOrder.itemSummary = (buildOrderSummary(prevItems, true)).vendorList;
        prevOrder.totalPrice = (buildOrderSummary(prevItems, true)).total;
        orders.push(prevOrder);

        return prevOrder;
}
