import React, { useState } from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import Question from './Question';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        marginTop: theme.spacing(10),
    }
}))

const DishQuestion = (props) => {
    const dishTypeId = props.dishTypeId;
    const dishType = props.dishTypes.byId[dishTypeId];
    const dishTypeName = dishType.name;
    const questionIds = dishType.questionIds;

    let dishNameImg = '❔'
    props.results.allIds.forEach(resultId => {
        if (dishTypeId == props.results.byId[resultId].dishTypeId) {
            const dishNameId = props.results.byId[resultId].dishNameId;
            dishNameImg = props.dishNames.byId[dishNameId].img;
        }
    })

    const classes = useStyles();
    return (
        <Paper elevation="2" className={classes.paper}>
            <Typography variant="h2">
                {dishTypeName}
            </Typography>
            {
                questionIds.map(questionId => (
                    <Question questionId={questionId} />
                ))
            }
            <Typography variant="h2">
                {dishNameImg}
            </Typography>
        </Paper>
    )
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => { }
export default connect(mapStateToProps, mapDispatchToProps)(DishQuestion);