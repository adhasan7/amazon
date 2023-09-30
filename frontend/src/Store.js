import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );

      if (existItem) {
        // Item sudah ada di keranjang, perbarui jumlahnya
        const updatedCartItems = state.cart.cartItems.map((item) =>
          item._id === newItem._id ? newItem : item
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: updatedCartItems,
          },
        };
      } else {
        // Item belum ada di keranjang, tambahkan item baru
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...state.cart.cartItems, newItem],
          },
        };
      }

    // Kasus lainnya dan logika aksi lainnya
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
