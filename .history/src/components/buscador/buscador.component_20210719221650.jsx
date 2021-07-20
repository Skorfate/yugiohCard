import React, {useState} from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { attributes,level } from '../../constante/FiltroCarta.constante';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { useEffect } from 'react';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    noLabel: {
        marginTop: theme.spacing(3),
      },
    w100 : {
        width : '100% !important'
    }
  }));

const Buscador = ({setParametro}) =>  {
    const classes = useStyles();
    const [nombre, setNombre] = useState('');
    const [atributo, setAtributo] = useState();
    const [nivel, setNivel] = useState();

    const onChangeCard = (event) => {
        setNombre(event.target.value);
    }

    const onchageAtributo = (event) => {
       setAtributo(event.target.value);
    }
    const onchageNivel = (event) => {
        setNivel(event.target.value);
    }

    useEffect(() => {
        buscar();
    }, [nombre,nivel,atributo]);


    const buscar = () => {
        const parametro = { params : {
           name : nombre,
           attribute : atributo,
           level : nivel,
        }}

        if(!parametro.params.name)
            delete parametro.params.name;
        if(!parametro.params.attribute)
            delete parametro.params.attribute;
        if(!parametro.params.level)
            delete parametro.params.level;                

        setParametro(parametro);
    }


    return (
        <div className={classes.root}>
            <Paper className="paper">
            <Grid container spacing={3} md={12} xs={12}>
                
                    <Grid container md={6} xs={6} className={classes.paper}>
                        
                        <FormControl>
                            <TextField id="buscador"
                                            label="Carta"
                                            onChange={onChangeCard}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        
                        </FormControl>
                       
                    </Grid>
                    <Grid item xs={3} md={3} className={classes.paper} >
                        
                            <FormControl className={clsx(classes.formControl, classes.noLabel, classes.w100)}>
                                <InputLabel id="atribuLabel">Atributo</InputLabel>
                                <Select id="selectAtributo" onChange={onchageAtributo} className={classes.w100}>
                                    <MenuItem value={null}>
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {attributes.map(item => (
                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        
                    </Grid>
                    <Grid item xs={3} md={3} className={classes.paper}>
                       
                            <FormControl className={clsx(classes.formControl, classes.noLabel, classes.w100)}>
                                <InputLabel id="nivelLabel">Nivel</InputLabel>
                                <Select id="selectNivel" onChange={onchageNivel} className={classes.w100}>
                                    <MenuItem value={null}>
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {level.map(item => (
                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        
                    </Grid>                   
            </Grid>
            <Grid container spacing={3} md={12} xs={12}>
                <Grid item xs={12} md={12} className={clsx(classes.paper)} >
                    <Button variant="contained" color="primary" className={classes.w100}>
                        Primary
                    </Button>
                </Grid>
            </Grid>
            </Paper>
        </div>
    );
}

export default Buscador
