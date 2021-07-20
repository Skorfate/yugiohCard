import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      aarticlegnItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        border: '2px soarticled #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    imageList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }));

const cleanText = texto => !texto || texto === "N/A" ? "Sin informacion" : texto;

const Detalle = ({ open, handleClose, item }) => {


    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
    <Dialog open={open} 
        fullScreen={fullScreen}
        onClose={handleClose}        
        className={classes.modal}        
        >
      <>
      
      <DialogTitle id="responsive-dialog-title">{item.archetype}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="textPrimary" component="p">
          Descripcion: {cleanText(item.desc)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Nivel: {cleanText(item.level)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Tipo: {cleanText(item.race)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Atributo: {cleanText(item.attribute)}
        </Typography>
        <Divider variant="inset" component="article" />
        <Typography variant="body2" color="textPrimary" component="p">
          Atk: {cleanText(item.atk)} / Def : {cleanText(item.def)}
        </Typography>
        <Divider variant="inset" component="article" />        
        <Divider variant="inset" component="article" />
        </DialogContent>
        <div className={classes.root}>
        <ImageList className={classes.imageList} cols={1}>
        {item.card_images && item.card_images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.image_url_small} alt={item.id} style={{maxHeight : '170px', maxWidth: '125px'}} />
          </ImageListItem>
        ))}
        </ImageList>
        </div>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>          
        </DialogActions>
      </>
    </Dialog>
  );
};

export default Detalle;
