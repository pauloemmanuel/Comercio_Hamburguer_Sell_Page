const initialState =  {
  cart:''
  };
  
let shopCart = (state = initialState, action) => {
  
    if(action.type === 'ADD_CART'){
      return {...state,cart:action.payload.email};
    }
  
    return state;
  }

  export default shopCart