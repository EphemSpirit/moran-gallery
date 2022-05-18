import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCart = {
    items: [],
    itemCount: 0
}

const cartReducer = (state, action) => {
    return defaultCart;
};

const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

    const addItemHandler = (item) => {};

    const removItemHandler = (id) => {};

    const cartContext = {
        items: cartState.items,
        itemCount: cartState.itemCount,
        addItem: addItemHandler,
        removeItem: removItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;