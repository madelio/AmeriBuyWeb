export default function(state=null, action){
	switch(action.type) {
		case "ADD_ORDER": {
			console.log(action.payload);
            return { ...state, orders: [...state.orders, action.payload] };
        }
      
        default:
              return state;
	}

	return state;
}