import { Grid } from '@material-ui/core';
import React, {useState } from 'react'
import Buscador from '../../components/Buscador/Buscador.component';


const Home = () => {

    const [item, setItem] = useState({});

    const cleanText = texto => !texto || texto === "N/A" ? "Sin informacion" : texto;

    const buscarCarta = (values) => {
        console.log(values);
    }

    
    

    return (
            <Grid container  justify="center" alignItems="center"  direction="column">
                    <Buscador buscarCarta = {buscarCarta} />
                    <Grid item spacing={ 3 }  xs={12} sm={12} md={12} justify="center">                        

                    </Grid>               
            </Grid>
    )
    
}

export default Home

