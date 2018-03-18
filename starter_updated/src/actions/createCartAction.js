export default function createCartAction(value, type) {
	if(type == 'CART') {
		console.log("cart received");
		return {
			type: "CART",
			payload: value
		}
	}
}