import { Grid } from '@material-ui/core';
import React, {useState } from 'react'
import { getCard } from './../../api/Yugioh.api';
import Buscador from '../../components/Buscador/Buscador.component';
import Card from '../../components/Card/Card.component';
import Box from '@material-ui/core/Box';

const Home = () => {

    const [item, setItem] = useState({});
    const [cards,setCards] = useState([]);

    const cleanText = texto => !texto || texto === "N/A" ? "Sin informacion" : texto;

    const buscarCarta = async (values) => {
        console.log(values);
        const data = await getCard(values);
        setCards(data);
    }

    return (
            <Grid container  justify="center" alignItems="center"  direction="column">
                    <Buscador buscarCarta = {buscarCarta} />
                    <Box m={2}>
                        <Grid item spacing={ 3 }  xs={12} sm={12} md={12} justify="center" style={{width: '100%'}}>                        
                            <Card cards={cards} />
                        </Grid>
                    </Box>
            </Grid>
    )
    
}

export default Home

