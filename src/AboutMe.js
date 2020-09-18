import { DialogContent, DialogTitle, Dialog, Typography, DialogActions, Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import ActionType from './ActionType';

const AboutMe = (props) => {
    return <Dialog open={props.ui.aboutMe.open}>
        <DialogTitle>
            <Typography variant="h4" color="primary">
                あさごはん512
            </Typography>
        </DialogTitle>
        <DialogContent dividers>
            <Typography gutterBottom={false}>
                9つの2択質問を答えて512通りの中から今日のあさごはんを決めましょう。React, Material-UI, Redux, React-Reduxを使用しています。
            </Typography>
            <Typography gutterBottom={false}>
                09/18 Redux, React-Reduxを導入
            </Typography>
            <Typography gutterBottom={false}>
                09/17 初期リリース
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button variant="text" fullWidth onClick={props.close}>閉じる</Button>
        </DialogActions>
    </Dialog>
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    close: () => {
        const action = {
            type: ActionType.CLOSE_ABOUTME,
            payload: {}
        }
        dispatch(action);
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);