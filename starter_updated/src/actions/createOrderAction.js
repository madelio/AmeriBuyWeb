//import buildOrderSummary from '../components/OrderHistory';
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
            itemSummary : ["test"],
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
            
        });
}