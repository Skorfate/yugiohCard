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



const useStyles = makeStyles((theme) => ({
    root: {
     
      display: 'flex',
      flexBasis : 'column'

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
            <Grid container spacing={3} md={12} >
                
                    <Grid item md={12} xs={12} className={classes.paper}>
                        <Paper className="paper">
                        <FormControl>
                            <div className="">
                            <TextField id="buscador"
                                            label="Carta"
                                            onChange={onChangeCard}
                                            margin="normal"
                                            variant="outlined"
                                        />
                            </div>
                            <div className="">
                            <InputLabel id="nivelLabel">Nivel</InputLabel>
                                <Select id="selectNivel" onChange={onchageNivel} className={classes.w100}>
                                    <MenuItem value={null}>
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    {level.map(item => (
                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                                </div>                
                        </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} className={classes.paper} >
                        <Paper className="paper">
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
                        </Paper>
                    </Grid>
                    <Grid item xs={6} md={6} className={classes.paper}>
                        <Paper className="paper">
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
                        </Paper>
                    </Grid>                   
            </Grid>
        </div>
    );
}

export default Buscador
