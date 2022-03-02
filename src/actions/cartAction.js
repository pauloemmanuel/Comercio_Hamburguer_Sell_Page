export const changeCart = (cart) => {
  return{
    type:'changeCart',
    payload:{
      cart:cart
    }
  }
}