
export default function createOrderAction(itemList) {

        return new Promise(function(resolve, reject){

        console.log("inside of create order action with itemList " + itemList[0].itemName);
        var idCtrPre = 1001;
        var idCtrPost = 28;
        var randomizer = 4;


		var order = {
            id : idCtrPre + "-" + idCtrPost,
            items: itemList,
            placed: Date.now(),
            itemSummary : (buildOrderSummary(itemList, false)).vendorList,
            estArrivalRange : 7,
            received : true,
            processed : false,
            shipped : false,
            delivered : false
        };

        console.log("order has been instantiated and looks like " + order.id);
        idCtrPre = idCtrPre + 2*randomizer;
        idCtrPost = idCtrPost + ((4*randomizer)%30);

            if(order != null) {
                resolve(order);
            } else {
                console.log("order is null in create order actions");
            }
        })
        
    
}

function buildOrderSummary(items, processedBool) {
    var vendors = [];
    var totalPrice = 0.00;
    
    for (var i = 0; i < items.length; i ++) {
        var item = items[i];
        var itemInd = vendorExists(item.vendor, vendors);
        
        if (itemInd != -1) {
            var vendor = vendors[itemInd];
            vendor.qty += item.qty;
            if (processedBool) {
                vendor.price += item.price;
                totalPrice += vendor.price;
            }
        } else {
           
            var newVendor = {name: item.itemWebsite, qty: item.itemQuantity};
            console.log("adding new vendor" + newVendor);
            if (processedBool) {
                newVendor.price = item.price;
                totalPrice += newVendor.price;
            }
            vendors.push(newVendor);
        }
    }
    console.log("Vendors returned are: " + vendors[0]);
    
    var summary = {
    vendorList : vendors,
    total : totalPrice
    }
    return summary;
    

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

    function VendorBuilder(name, qty) {
        this.name = name;
        this.qty = qty;
        }