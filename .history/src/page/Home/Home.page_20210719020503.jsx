import { CircularProgress, Grid } from '@material-ui/core';
import React, {useState } from 'react'
import { getCard } from './../../api/Yugioh.api';
import Buscador from '../../components/Buscador/Buscador.component';
import Card from '../../components/Card/Card.component';
import Box from '@material-ui/core/Box';

const Home = () => {

    const [item, setItem] = useState({});
    const [cards,setCards] = useState([]);
    const [loading,setLoading] = useState(false);
    
    const buscarCarta = async (parametro) => {
        if(!parametro.params.level && !parametro.params.attribute && !parametro.params.name)
            return;
        setLoading(true);
        console.log(parametro);
        const data = await getCard(parametro);
        setCards(data);
        setLoading(false);
    }

    return (
            <Grid container  justify="center" alignItems="center"  direction="column">
                    <Buscador buscarCarta = {buscarCarta} />
                    <Box m={4}>
                        {loading &&
                        <CircularProgress/>
                        }
                        {!loading && 
                            <Grid item spacing={ 3 }  xs={12} sm={12} md={12} justify="center" style={{width: '100%'}}>                        
                                <Card cards={cards} />
                            </Grid>
                        }
                    </Box>
            </Grid>
    )
    
}

export default Home

