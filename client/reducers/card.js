import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  cardSlice,
  increment,
  addCard,
  selectCard,
  selectTitle,
} from './cardSlice';
import { getCards } from './deckSlice';

export function Test() {
  const dispatch = useDispatch();
  const { card } = useSelector(selectCard);
  const { title } = useSelector(selectTitle);
  // console.log('USE SELECTOR', useSelector(selectCard));
  // console.log('card destructured', card);
  // console.log('title', title);

  // console.log('drilling', card.cards[0].title);
  // // const dispatch = useDispatch();
  // // const [incrementAmount, setIncrementAmount] = useState('2');
  // console.log('card slice', cardSlice);
  // console.log('increment', increment);
  // console.log('root', RootState);

  return (
    <div>
      <h1>{card.cards[0].title}</h1>
      <h2>{card.cards[0].todos[0].name}</h2>
      <h3>{title}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <br></br>
      <input id="stateTest" type="text" name="search"></input>
      <button
        onClick={() => {
          let value = document.querySelector('#stateTest').value;
          console.log('will this update', card.cards);
          dispatch(addCard(value));
        }}
      >
        TESTING
      </button>
      <button
        onClick={() => {
          fetch('/server/cards')
            .then((resp) => resp.json())
            .then((data) => {
              dispatch(getCards(data));
            });
        }}
      >
        GET DECK
      </button>
    </div>
  );
}
