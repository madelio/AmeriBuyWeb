var idCtrPre = 1001
var idCtrPost = 28
var randomizer = 4

var item = {
    vendor : "",
    qty : 1,
    url : "",
    price : 0.00
}

var order = {
    id : "",
    items : [],
    estArrivalRange : 7,
    placed : null,
    itemSummary : [],
    received : false,
    receivedDate : null,
    processed : false,
    processDate : null,
    shipped : false,
    shippedDate : null,
    delivered : false,
    deliveryDate : null,
    totalPrice: 0
}

var vendor = {
    name : "",
    qty : 1,
    price : 0.00
}

var orders = [];
var items = [];

function ItemBuilder(vendor, url) {
    this.vendor = vendor;
    this.url = url;
    this.qty = 1;
    this.price = 0.00;
}

function VendorBuilder(name, qty) {
    this.name = name;
    this.qty = qty;
}


function OrderBuilder(items) {
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

function pushOrderDelivery(order) {
    order.received = true;
    order.processed = true;
    order.shipped = true;
    order.delivered = true;

    order.receivedDate = order.placedDate;
    order.processed = addDays(order.placedDate, 1);
    order.shipped = addDays(order.placedDate, 3);
    order.delivered = addDays(order.placedDate, order.estArrivalRange);
}


function vendorExists(vendorName, vendors) {
    for (var k = 0; k < vendors.length; k++) {
        var vendor = vendors[k];
        if (vendor.name == vendorName) {
            return k;
        }
    }
    return -1;
}


function buildOrderSummary(items, processedBool) {
    var vendors = []
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

// previous Order
var itemPrev1 = new ItemBuilder("Forever21", "forver21.com/tshirt")
itemPrev1.price = 20.00
var itemPrev2 = new ItemBuilder("FootLocker", "footlocker.com/whitetop")
itemPrev2.price = 90.50
var itemPrev3 =new ItemBuilder("FootLocker", "footlocker.com/3421903")
itemPrev3.price = 53.76

var prevItems = [itemPrev1, itemPrev2, itemPrev3];

var prevOrder = new OrderBuilder(prevItems);
prevOrder.placed = new Date("1/15/2018");
pushOrderDelivery(prevOrder);
prevOrder.itemSummary = (buildOrderSummary(prevItems, true)).vendorList;
prevOrder.totalPrice = (buildOrderSummary(prevItems, true)).total;
orders.push(prevOrder);

// current Order
var item1 = new ItemBuilder("Amazon", "amazon.com/applesauce")
var item2 = new ItemBuilder("BestBuy", "bestbuy.com/headphones")
var item3 = new ItemBuilder("Amazon", "amazon.com/redsocks")
var item4 = new ItemBuilder("BestBuy", "bestbuy.com/computer" )
var item5 = new ItemBuilder("BestBuy", "bestbuy.com/usb" )


var items = [item1, item2, item3, item4, item5];
var orderPrev2 = new OrderBuilder(items);
orders.push(orderPrev2);

// realOrder

var orderCount = parseInt(localStorage.getItem("count"));

var itemArray = []
for (var ct = (orderCount-1); ct <= 0; ct--) {
    var itemStr = "item" + ct;
    var item = JSON.parse(localStorage.getItem(itemStr));

    itemArray.push(new ItemBuilder(item[1], item[3]))
}

if (itemArray != []) {
    var order = new OrderBuilder(itemArray);
    order.push(currOrder);
}


// Success Page Element
var orderSummary = document.getElementById("orderTable");
if (orderSummary != null) {
    var vendorSummary = order.itemSummary;
    var htmlStr = orderSummary.innerHTML;
    var total = 0;
    console.log(vendorSummary);
    for (var j = 0; j < vendorSummary.length; j++) {
        var vendor = vendorSummary[j];
        htmlStr += "<tr><td>" + vendor.name + "</td><td>" + vendor.qty + "</td></tr>";
        total += vendor.qty;
    }

    htmlStr += "<tr><td>Total</td><td>" + total + "</td></tr>"
    orderSummary.innerHTML = htmlStr;
}

if (document.getElementById("OrderID") != null) {
    document.getElementById("OrderID").innerHTML =
    "<p><b>Order No:</b> " + order.id;
}

// Date Info
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}


var estDates = document.getElementById("estDates");
if (estDates != null) {
    var startDateStr = new Date(order.placed).toLocaleDateString('en-US');
    var endDate = addDays(order.placed, order.estArrivalRange);
    var endDateStr = new Date(endDate).toLocaleDateString('en-US');
    console.log("StartDateStr is " + startDateStr + " end date is " + endDateStr);

    estDates.innerHTML += "<br>Estimated Shipping: " + startDateStr + " - " + endDateStr;
}



// Checkout Page Elements


var radioForm = document.forms["shippingForm"]
if (radioForm != null) {
    radios = radioForm.elements["myRadio"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            if(this.checked == false) {
                this.checked = true;
            }
        }
    }
}


var shoppingcart = document.getElementById("shoppingcart-elements");
if (shoppingcart != null) {
    var htmlStr = shoppingcart.innerHTML;
    var vendors = order.itemSummary;

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

    shoppingcart.innerHTML = htmlStr;
}



// Account Orders Elements

var orderHistory = document.getElementById("orderHistory");
if (orderHistory != null) {
    var htmlStr = orderHistory.innerHTML;
    console.log (orders);
    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        htmlStr += "<tr><td><table class='order-items'>"
        var header = "<tr><th>Order#: " + order.id + "</th>" +
            "<th>Placed " + new Date(order.placed).toLocaleDateString('en-us') + "</th>" +
            "<th>Details</th></tr>"
        var vendors = order.itemSummary;
        var vendorStr = "";

        for (var j = 0; j < vendors.length; j++) {
            var vendor = vendors[j];
            vendorStr += "<tr><td><b> " + vendor.name + " </b> (" + vendor.qty + "items) : </td>"
            if (order.processed == false) {
                vendorStr += "<td> Est Price Pending </td>"
            } else {
                vendorStr += "<td> Est Price: $" + vendor.price + "</td>"
            }
            if (j == 0) {
                vendorStr += "<td class='total' rowspan='" + vendors.length + "'><b>Total:</b><br>"
                if(order.processed == false) {
                    vendorStr += "Pending<br>"
                } else {
                    vendorStr += order.totalPrice + "<br>Approve<br>"
                }
                vendorStr += "Request Cancellation</td>"
            }
            vendorStr += "</tr>"
        }

        htmlStr += header + vendorStr + "</table></td></tr>";
        /*
        htmlStr += "<tr class='statusbar'><td colspan='3'>"
        if (order.received) {
            htmlSr += "<b>"

        }
        Received > Processed > Shipped > <b>Delivered</b>
        htmlStr += "</td></tr>" */
    }

    orderHistory.innerHTML += htmlStr;
    console.log(orderHistory.innerHTML);
}
