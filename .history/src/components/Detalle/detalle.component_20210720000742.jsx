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
        <>
        <ImageList className={classes.imageList} cols={2.5}>
        {item.card_images.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        </ImageList>
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
