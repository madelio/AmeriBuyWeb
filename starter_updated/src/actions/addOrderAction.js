import createOrderAction from './createOrderAction';
import { setTimeout } from 'timers';


export default function addOrderAction(items, success) {

	console.log("Inside add order action");
	return (dispatch) => {

		createOrderAction(items).then(		
			(order) => {
			
			console.log("about to add this order: " + order);
			
			dispatch({
				type: "ADD_ORDER",
				payload: [order]
			})
			success();
		})
		//dispatch({type: "CREATE_ORDER"});
	}
	
}