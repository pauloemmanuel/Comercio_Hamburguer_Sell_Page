const initialState =  {
  cart:0
  };
  
let cartReducer = (state = initialState, action) => {
  
    if(action.type === 'ADD_CART'){
      return {...state,cart:action.payload.email};
    }
  
    return state;
  }

  export default cartReducer