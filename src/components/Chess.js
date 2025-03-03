import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoadFenDialog from './LoadFenDialog';
import GetFenDialog from './GetFenDialog';
import RequestTakebackDialog from './RequestTakebackDialog';
import CreateInviteCodeDialog from './CreateInviteCodeDialog';
import EnterInviteCodeDialog from './EnterInviteCodeDialog';
import HeuristicPictureDialog from './HeuristicPictureDialog';
import Board from './Board.js';
import Buttons from './Buttons.js';
import History from './History';
import MainBreadcrumbs from './MainBreadcrumbs';
import MoveValidator from './MoveValidator.js';
import ButtonsPlayFriendMode from './ButtonsPlayFriendMode.js';
import ButtonResignGame from './ButtonsResignGame.js';
import Timers from './Timers';
import InfoAlert from './InfoAlert.js';
import '../index.css';
import store from '../store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  panel: {
    marginTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const Chess = ({props}) => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Grid item xs={12} md={5}>
          <Grid item xs={12}>
            <Buttons props={props} />
          </Grid>
          <Grid item xs={12}>
            <Board props={props} />
          </Grid>
          <Grid item xs={12} style={{clear:'both'}}>
            <History />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.panel}>
          <Grid item xs={12} className={classes.breadcrumbs}>
            <MainBreadcrumbs />
          </Grid>
          <Timers />
          <Paper elevation={3} className={classes.paper}>
            <MoveValidator />
            <ButtonsPlayFriendMode />
            <ButtonResignGame />
          </Paper>
          <InfoAlert />
        </Grid>
      </Grid>
      <RequestTakebackDialog />
      <LoadFenDialog />
      <CreateInviteCodeDialog />
      <EnterInviteCodeDialog />
      <HeuristicPictureDialog />
      <GetFenDialog />
    </Provider>
  );
}

export default Chess;
