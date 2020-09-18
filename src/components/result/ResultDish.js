import React, { useEffect, useState } from 'react';
import ActionType from '../../ActionType'
import { Typography } from '@material-ui/core';
import Data from '../../Data';
import makeStyles from'@material-ui/core/styles/makeStyles'
import { connect } from 'react-redux';

const useStyles=makeStyles((theme)=>({
    div:{
        marginTop:theme.spacing(4),
        textAlign:"center"
    }
}))

const ResultDish=(props)=>{
    const{dishTypeId,dishNameId}=props
    const dishTypeName=props.dishTypes.byId[dishTypeId].name
    const dishNameName=props.dishNames.byId[dishNameId].name
    const dishNameImg=props.dishNames.byId[dishNameId].img
    const classes=useStyles();
    
    return(
        <div className={classes.div}>
            <div>
                <Typography variant="h4">
                    {dishTypeName}
                </Typography>
            </div>
            <div>
                <Typography variant="h2">
                    {dishNameName}{dishNameImg}
                </Typography>
            </div>

        </div>
    )
}

const mapStateToProps=state=>state
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(ResultDish);