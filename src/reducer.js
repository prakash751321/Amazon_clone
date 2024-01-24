
export const initialState = {
  basket: [ ],
  user: null
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0 )

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_USER" :
      return {
        ...state,
        user: action.user
      }

      case "RETURNS" : 
        // logic for move item to returns page

        let removeItem = [...state.basket]
        console.log(removeItem)

        return {
          
        }  


    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return { 
        ...state,
        basket : [...state.basket, action.item]
       }
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket

      //  we cloned the basket
      let newBasket = [...state.basket]
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )       

        if(index >= 0) {
          // item exists in basket, remove it
          newBasket.splice(index, 1)
        } else {
          console.error(`can't remove product (id: ${action.id}) as it's no longer available `)
        }

      return { ...state, basket : newBasket }
    default:
      return state;
  }
}

export default reducer