import React from 'react';
import { useDispatch } from 'react-redux';
import { getCards } from './deckSlice';

export function DeckTest() {
  const dispatch = useDispatch();

  return (
    <div>
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
