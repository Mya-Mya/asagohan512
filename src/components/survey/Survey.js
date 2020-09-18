import { DialerSipTwoTone } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import DishQuestion from './dishquestion/DishQuestion'

const Survey=(props)=>{
    const dishTypeIds=props.dishTypes.allIds
    return(
        dishTypeIds.map(dishTypeId=>(
            <DishQuestion dishTypeId={dishTypeId}/>
        ))
    )
}

const mapStateToProps=state=>state
const mapDispatchToProps=dispatch=>{}
export default connect(mapStateToProps,mapDispatchToProps)(Survey);