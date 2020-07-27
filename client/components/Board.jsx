import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from './Card.jsx';
import { selectCard, increment } from '../reducers/cardSlice';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  board: {
    backgroundColor: '#004ba0',
  }
}));

const Board = (props) => {
  const dispatch = useDispatch();
  const { card } = useSelector(selectCard);
  const current = card.current;
  console.log('current', current);
  const classes = useStyles();
  const cardsArr = [];
  if (props.id === 'stack') {
    for (let i = current + 1; i < card.cards.length; i++) {
      cardsArr.push(<Card key={i} name={card.cards[i].name} />, <br />);
    }
  }

  if (props.id === 'inProgress' && card.cards[current]) {
    console.log('in if', card.cards[current]);
    cardsArr.push(
      <div>
        <Card
          className={classes.board}
          key={current}
          name={card.cards[current].name}
          url={card.cards[current].url}
          card={card.cards[current]}
        />
        <Button onClick={() => dispatch(increment())}>Increment</Button>
      </div>
    );
  }

  if (props.id === 'complete') {
    for (let i = 0; i < current; i++) {
      cardsArr.push(<Card key={i} name={card.cards[i].name} />, <br />);
    }
  }
  return (
    <div>
      <Grid item xs={12}>
        {cardsArr}
      </Grid>
    </div>
  );
};

export default Board;
