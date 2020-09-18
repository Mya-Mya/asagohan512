import { Grid } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import Result from './result/Result';
import Survey from './survey/Survey';
import { Reducer } from '../Reducer';
import ActionType from '../ActionType';
import { connect } from 'react-redux';
import AboutMe from '../AboutMe';

function App(props) {
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <AboutMe />
        <Header />
        <Survey />
        <Result />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}


export default App;
