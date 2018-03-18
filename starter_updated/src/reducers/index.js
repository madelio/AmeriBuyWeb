import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import cartReducer from './cartReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  cart: cartReducer,
  card: cardReducer
});

export default rootReducer;
