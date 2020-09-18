import { Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import {  makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles=makeStyles((theme)=>({
    paper:{
      textAlign:"center",
      paddingTop:theme.spacing(10),
      marginTop:theme.spacing(3),
      backgroundColor:theme.palette.primary.main,
      color:theme.palette.text.primary
    },
    text:{
        marginTop:theme.spacing(4),
    }
  }))

const Header=()=>{
    const classes=useStyles();
    return ( 
        <Paper elevation={1} className={classes.paper}>
            <Typography variant="h2" className={classes.text}>
                あさごはん512
            </Typography>
            <Typography variant="h2" className={classes.text}>
                🍞🥗🍖🍙🍜🍤🍦🍪🍭
            </Typography>
            <Typography variant="body1" className={classes.text}>
                あさごはんを決める
            </Typography>
            <ExpandMoreIcon className={classes.text}/>
        </Paper>
    );
}

 
export default Header;