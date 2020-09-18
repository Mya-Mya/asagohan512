import { ButtonGroup, makeStyles, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ActionType from "../../../ActionType";

const useStyles = makeStyles((theme) => ({
    div: {
        marginTop: theme.spacing(4),
        textAlign: "center"
    }
}))



const Question = (props) => {
    const { questionId } = props
    const question = props.questions.byId[questionId]
    const questionValue = question.value
    const choices = question.choices

    let answered = false
    let answerValue = undefined
    props.answers.allIds.forEach(answerId => {
        if (questionId == props.answers.byId[answerId].questionId) {
            answered = true
            answerValue = props.answers.byId[answerId].answerValue
        }
    })
    const button0Color = (answered && answerValue == 0) ? 'primary' : ''
    const button1Color = (answered && answerValue == 1) ? 'primary' : ''

    const classes = useStyles();
    return (
        <div className={classes.div}>
            <Typography variant="body1">
                {questionValue}
            </Typography>
            <ButtonGroup color="textPrimary">
                <Button onClick={e => props.onAnswer(questionId, 0)} color={button0Color}>{choices[0]}</Button>
                <Button onClick={e => props.onAnswer(questionId, 1)} color={button1Color}>{choices[1]}</Button>
            </ButtonGroup>
        </div>
    )
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    onAnswer: (questionId, answerValue) => {
        const action = {
            type: ActionType.ANSWERED_QUESTION,
            payload: {
                questionId: questionId,
                answerValue: answerValue
            }
        }
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Question);