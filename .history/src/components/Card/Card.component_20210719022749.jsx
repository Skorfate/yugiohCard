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
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      minWidth: 200,
      minHeight: 450,
      maxHeight: 1200,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const Card = ({cards = []}) => {

    const classes = useStyles();

    return (
        <Grid container spacing={3} md={12} xs={12} lg={12}>
                        
                <ImageList rowHeight={246} className={classes.imageList}>
                    {cards.map((item) => (                        
                            <Grid item md={2} xs={2} className={classes.paper} style={{width: '100%', minWidth: '200px', marginBottom: 60}}> 
                                
                                    <ImageListItem key={item.id}>
                                        {item?.card_images && item.card_images.length > 0 &&
                                            <>                            
                                                <img src={item.card_images[0].image_url_small} alt={item.archetype}  style={{minWidth: '200px'}}/>
                                            </>
                                        }
                                        <ImageListItemBar
                                        title={item.archetype}
                                        subtitle={<span>{item.desc}</span>}
                                        actionIcon={
                                            <IconButton aria-label={`Atk: ${item.atk}/ Def: ${item.def}`} className={classes.icon} onClick={() => console.log(item)}>
                                                <InfoIcon/>
                                            </IconButton>
                                        }
                                        />
                                    </ImageListItem>
                                
                            </Grid>
                        
                    ))}
                </ImageList>
            
        </Grid>
    )
}


export default Card;
