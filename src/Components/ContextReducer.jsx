import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {
        productImg: action.productImg,
        title: action.title,
        productname: action.productname,
        price: action.price,
        quantity: action.quantity
      }];
    case 'REMOVE':
      let newArr = [...state]
      newArr.splice(action.index,1)
      return newArr;
    case 'INCREMENT':
      return state.map((item, index) =>
        index === action.index ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'DECREMENT':
      return state.map((item, index) =>
        index === action.index ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      );
    case 'DROP':
        let empArray = []
        return empArray
    default:
      console.log("Error in Reducer");
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

