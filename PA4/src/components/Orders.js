import React from 'react';
import ReactDOM from 'react-dom';

var idCtrPre = 1001;
var idCtrPost = 28;
var randomizer = 4;

class Orders {

    static VendorBuilder(name, qty) {
        this.name = name;
        this.qty = qty;
    }

    static ItemBuilder(vendor, url) {
        this.vendor = vendor;
        this.url = url;
        this.qty = 1;
        this.price = 0.00;
    }
    static vendorExists(vendorName, vendors) {
        for (var k = 0; k < vendors.length; k++) {
            var vendor = vendors[k];
            if (vendor.name == vendorName) {
                return k;
            }
        }
        return -1;
    }
    static buildOrderSummary(items, processedBool) {
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
    static OrderBuilder(items) {
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

   

    
   
}

export default Orders;