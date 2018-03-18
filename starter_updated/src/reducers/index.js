import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import cartReducer from './cartReducer';
import cardReducer from './cardReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  cart: cartReducer,
  card: cardReducer,
  orders: orderReducer
});

export default rootReducer;
