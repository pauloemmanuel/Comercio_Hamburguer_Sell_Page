import cartReducer from './reducers/shopCartReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  cart:cartReducer
});