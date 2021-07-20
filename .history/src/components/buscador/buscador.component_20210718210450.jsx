import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { attributes } from '../../constante/FiltroCarta.constante';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const Buscador = ({buscarCarta}) =>  {

    const [nombre, setNombre] = useState('');
    const [atributo, setAtributo] = useState();

    const getPelicula = () => {
        const name = document.querySelector('#buscador').value.toLowerCase().trim();
        console.log(name);
        if (nombre !== name){
            setNombre(name);
            buscarCarta(name);
        }
    }

    const onchageAtributo = () => {
        console.log(values)
    }


    return (
        <Grid item xs={ 12 } sm={ 6 } style={{width: '90%'}}>
            <Paper className="paper">
                <Autocomplete 
                    id="buscador"
                    freeSolo
                    options= {[]}
                    renderInput={ params => (
                        <TextField 
                            {...params}
                            label="Carta"
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                />
                <Select id="demo-controlled-open-select" value={atributo} onChange={onchageAtributo}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {attributes.map(item => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>

                
            </Paper>
        </Grid>
    );
}

export default Buscador
