export default function(state=null, action){
	switch(action.type) {
		case "CARD": {
			console.log(action.payload);
			return action.payload;
		}
	}

	return state;
}