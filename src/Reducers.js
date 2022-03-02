import cartReducer from './reducers/cartReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  cart:cartReducer
});