export default function addOrderAction(value, type) {
	if(type == 'ORDER') {
			
		return {
			type: "ADD_ORDER",
			payload: value
		}
	}
}