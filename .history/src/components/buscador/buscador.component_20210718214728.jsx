import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { attributes,level } from '../../constante/FiltroCarta.constante';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Buscador = ({buscarCarta}) =>  {
    const classes = useStyles();
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
        <div className={classes.root}>
            <Grid container spacing={3} >               
                    <Grid item md={12} xs={12} className={classes.paper}>
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
                        </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} className={classes.paper} >
                        <InputLabel id="demo-controlled-open-select-label">Atributo</InputLabel>
                        <Select id="demo-controlled-open-select" value={atributo} onChange={onchageAtributo} >
                            <MenuItem value="">
                                <em>Seleccionar</em>
                            </MenuItem>
                            {attributes.map(item => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={6} className={classes.paper}>
                        <InputLabel id="demo-controlled-open-select-label">Nivel</InputLabel>
                        <Select id="demo-controlled-open-select" value={nivel} onChange={onchageNivel} >
                            <MenuItem value="">
                                <em>Seleccionar</em>
                            </MenuItem>
                            {level.map(item => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </Grid>                     
            </Grid>
        </div>
    );
}

export default Buscador
