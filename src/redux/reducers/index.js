import { combineReducers } from 'redux';
import handleCart from './handleCart';

const rootReducer = combineReducers({
  cart: handleCart,
});

export default rootReducer;


