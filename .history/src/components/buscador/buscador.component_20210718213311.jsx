import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { attributes,level } from '../../constante/FiltroCarta.constante';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const Buscador = ({buscarCarta}) =>  {

    const [nombre, setNombre] = useState('');
    const [atributo, setAtributo] = useState();
    const [nivel, setNivel] = useState();
    const onChangeCard = (values) => {
        const name = document.querySelector('#buscador').value.toLowerCase().trim();
        console.log(name);
        setNombre(name);
        const param = {
            name,
            attribute : atributo,

        }
        buscarCarta(param);
        
    }

    const onchageAtributo = (event) => {
       setAtributo(event.target.value);
    }
    const onchageNivel = (event) => {
        setNivel(event.target.value);
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
                            onChange={onChangeCard}
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                />
                <InputLabel id="demo-controlled-open-select-label">Atributo</InputLabel>
                <Select id="demo-controlled-open-select" value={atributo} onChange={onchageAtributo} >
                    <MenuItem value="">
                        <em>Seleccionar</em>
                    </MenuItem>
                    {attributes.map(item => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>

                <InputLabel id="demo-controlled-open-select-label">Nivel</InputLabel>
                <Select id="demo-controlled-open-select" value={nivel} onChange={onchageNivel} >
                    <MenuItem value="">
                        <em>Seleccionar</em>
                    </MenuItem>
                    {level.map(item => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>

                
            </Paper>
        </Grid>
    );
}

export default Buscador
