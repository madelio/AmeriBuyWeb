export default function createCardAction(value, type) {
	if(type == 'CARD') {
				console.log("card received");

		return {
			type: "CARD",
			payload: value
		}
	}
}