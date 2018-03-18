export default function(state={orders: []}, action){
	switch(action.type) {
		case "ADD_ORDER": {
			console.log("add order " + action.payload.id);
            return { ...state, orders: [...state.orders, action.payload] };
		}
		case "CREATE_ORDER": {
			console.log("order reducer created with " + action.payload.items[0].itemName);
			return action.payload;
		}
      
        default:
              return state;
	}


}