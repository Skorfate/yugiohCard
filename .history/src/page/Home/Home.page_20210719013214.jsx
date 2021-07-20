import { Grid } from '@material-ui/core';
import React, {useState } from 'react'
import { getCard } from './../../api/Yugioh.api';
import Buscador from '../../components/Buscador/Buscador.component';
import Card from '../../components/Card/Card.component';


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
                    <Grid item spacing={ 3 }  xs={12} sm={12} md={12} justify="center">                        
                    <Card cards={cards} />
                    </Grid>               
            </Grid>
    )
    
}

export default Home

