import React, { Component } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card.jsx';
import { getCards, selectDeck } from '../reducers/deckSlice';
import { getAll, selectCard } from '../reducers/cardSlice';

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
  const { card } = useSelector(selectCard);
  const current = card.current;
  console.log('current', current);

  const cardsArr = [];
  if (props.id === 'stack') {
    for (let i = current + 1; i < card.cards.length; i++) {
      cardsArr.push(<Card key={i} name={card.cards[i].name} />);
    }
  }

  if (props.id === 'inProgress' && card.cards[0]) {
    console.log('in if', card.cards[current]);
    cardsArr.push(<Card key={current} name={card.cards[current].name} />);
  }

  if (props.id === 'complete') {
    for (let i = 0; i < current; i++) {
      cardsArr.push(<Card key={i} name={card.cards[i].name} />);
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
