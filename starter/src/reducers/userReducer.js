export default function(state=null, action){
	switch(action.type) {
		case "USER": {
			console.log(action.payload);
			return action.payload;
		}
	}

	return state;
}