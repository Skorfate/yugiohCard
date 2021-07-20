import React, { useState } from 'react'

const useFetch = ( param = {}) => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading ] = useState(false);

    const buscarCarta = async (parametro) => {
        if(!parametro.params.level && !parametro.params.attribute && !parametro.params.name)
            return;        
        setLoading(true);
        console.log(parametro);
        const data = await getCard(parametro);
        console.log(data);
        setCards(data);
        setLoading(false);
    }

    useEffect(() => { 
        buscarCarta(param);
      }, [param]);

      return { data, loading };
}

export default useFetch;

