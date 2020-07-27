import React, { Component } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card.jsx';
import { getCards, selectDeck } from '../reducers/deckSlice';

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
  const dispatch = useDispatch();
  const { deck } = useSelector(selectDeck);

  const cardsArr = [];
  if (props.id === 'stack') {
    for (let i = 0; i < deck.cards.length; i++) {
      cardsArr.push(<Card key={i} name={deck.cards[i].name} />);
    }
  }

  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12}>
        {cardsArr}
      </Grid>
    </div>
  );
};

export default Board;
