import { CircularProgress, Grid } from '@material-ui/core';
import React, {useState } from 'react'
import Buscador from './../../components/Buscador/Buscador.component';
import Card from './../../components/Card/Card.component';
import Box from '@material-ui/core/Box';
import NotFound from './../../components/notFound/notFound.component';
import useFetch from './../../components/FetchData/UseFetch.component';
import Detalle from '../../components/Detalle/detalle.component';

const Home = () => {
    const [parametro, setParametro] = useState({})
    const { loading, cards} = useFetch(parametro);
    const [item, setItem] = useState({});
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const showModal = () => {
        setOpen(true);
    }

    /*const buscarCarta = async (parametro) => {
        if(!parametro.params.level && !parametro.params.attribute && !parametro.params.name)
            return;
        setLoading(true);
        console.log(parametro);
        const data = await getCard(parametro);
        console.log(data);
        setCards(data);
        setLoading(false);
    }*/

    return (
            <Grid container  justify="center" alignItems="center"  direction="column">
                    <Buscador setParametro={setParametro}/>
                    <Box m={4}>
                        {loading &&
                        <CircularProgress/>
                        }
                        {!loading && 
                            <Grid item spacing={ 3 }  xs={12} sm={12} md={12} justify="center" style={{width: '100%'}}>
                                {cards.length === 0 && 
                                    <NotFound/>
                                }
                                <Card cards={cards} />
                            </Grid>
                        }
                    </Box>
                    
            </Grid>
    )
    
}

export default Home

