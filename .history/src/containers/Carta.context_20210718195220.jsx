import React,{createContext, useState} from 'react';

export const CartaContext = createContext();

const CartaContextProvider = ({children}) => {
    
    const [historial, setHistorial] = useState([])

    return (
        <CartaContext.Provider value={{historial, setHistorial}}>
            {children}
        </CartaContext.Provider>
    );
}

export default CartaContextProvider;
