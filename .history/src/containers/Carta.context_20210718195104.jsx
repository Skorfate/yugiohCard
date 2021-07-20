import React,{createContext, useState} from 'react';

export const CartaContext = createContext();

const CartaContextProvider = ({children}) => {

   
    

    return (
        <CartaContext.Provider value={{handleShow, show}}>
            {children}
        </CartaContext.Provider>
    );
}

export default CartaContextProvider;
