import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const Card = ({cards = []}) => {

    const classes = useStyles();

    return (
        <Grid container spacing={3} md={12} xs={12} lg={12}>
            <Grid item md={3} xs={3} className={classes.paper}>                
                <ImageList rowHeight={180} className={classes.imageList}>
                    {cards.map((item) => (
                    <ImageListItem key={item.id}>
                        {item?.card_image && item.card_image.length > 0 &&
                            <>
                            {item.card_image[0]}
                            <img src={item.card_image[0]} alt={item.archetype} />
                            </>
                        }
                        <ImageListItemBar
                        title={item.archetype}
                        subtitle={<span>{item.desc}</span>}
                        actionIcon={
                            <IconButton aria-label={`Atk: ${item.atk}/ Def: ${item.def}`} className={classes.icon}>
                            <InfoIcon />
                            </IconButton>
                        }
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
    )
}


export default Card;
