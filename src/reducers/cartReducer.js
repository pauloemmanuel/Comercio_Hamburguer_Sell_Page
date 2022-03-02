const initialState =  {
  cart:0
  };
  
let cartReducer = (state = initialState, action) => {
    console.log(state);
    if(action.type === 'changeCart'){
      
      return {...state,cart:action.payload.cart};
     
    }
    return state;
  }

  export default cartReducer