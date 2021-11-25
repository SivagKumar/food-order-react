import CartContext from "./cart-context";
import {useReducer} from "react";


/* using reducer because it is a complex state management,
* managing the no of items added already*/

const defaultCartState = {
    items:[],
    totalAmount: 0
}
const cartReducer =(state, action) =>{
    if(action.type==='ADD'){
      const updateItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount+ action.item.price * action.item.amount;
      return {
          items: updateItems,
          totalAmount: updatedTotalAmount
      }
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCardHandler = (item) =>{
        dispatchCartAction({type:'ADD', item:item})
    };
    const removeItemToCardHandler = (id) =>{
        dispatchCartAction({type:'REMOVE', id:id})

    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemToCardHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;