import React from 'react';
import { IconButton, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import ResultDish from './ResultDish';
import Data from '../../Data';
import { connect } from 'react-redux';
import ActionType from '../../ActionType';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(6),
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        textAlign: "center",
    },
    aboutMe: {
        marginTop: theme.spacing(10)
    }
}))

const Result = (props) => {
    const dishTypeIds = props.dishTypes.allIds;
    const resultIds = props.results.allIds;
    console.log(dishTypeIds);
    const classes = useStyles();
    return (
        <Paper elevation="3" className={classes.paper}>
            <Typography variant="h2">
                今日のあさごはんは・・・
            </Typography>
            {
                dishTypeIds.map(dishTypeId => {
                    return resultIds.map(resultId => {
                        if (dishTypeId == props.results.byId[resultId].dishTypeId) {
                            const dishNameId = props.results.byId[resultId].dishNameId
                            console.log(dishTypeId);
                            return <ResultDish dishTypeId={dishTypeId} dishNameId={dishNameId} />
                        }
                    })
                })
            }
            <Button onClick={props.openAboutMe} className={classes.aboutMe} variant="outlined">
                <Typography>このアプリについて</Typography>
                <InfoIcon />
            </Button>
        </Paper>
    )
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    openAboutMe: () => {
        const action = {
            type: ActionType.OPEN_ABOUTME,
            payload: {}
        }
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Result);