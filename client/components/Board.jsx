import React, { Component } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Board = (props) => {

    const classes = useStyles();
    return (
      <div>
        <Grid item xs={12}>
          {/* map over cards array */}
            <Card id={props.id}/>
        </Grid>
      </div>
    );
  }


export default Board;
