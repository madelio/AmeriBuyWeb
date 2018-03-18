import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  cart: cartReducer
});

export default rootReducer;
