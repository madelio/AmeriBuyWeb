export default function(state={orders:[]}, action){
	switch(action.type) {
		case "ADD_ORDER": {
			console.log(action.payload);
        	return {...state, orders: state.orders.concat(action.payload)};
		}
	}

	return state;
}