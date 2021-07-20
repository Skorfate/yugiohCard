import React,{createContext, useState} from 'react';

export const CartaContext = createContext();

const CartaContextProvider = ({children}) => {
    
    const show = null;

    return (
        <CartaContext.Provider value={{show}}>
            {children}
        </CartaContext.Provider>
    );
}

export default CartaContextProvider;
