import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { cardSlice, increment, selectCard } from './cardSlice';
import { RootState } from '../store/store';

export function Card() {
  const dispatch = useDispatch();

  //const { cardSlice } = useSelector((state: RootState) => state.card);

  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  console.log('card slice', cardSlice);
  console.log('increment', increment);
  console.log('root', RootState);

  return <div>{cardSlice.initialState}</div>;
}
