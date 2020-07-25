import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardSlice, increment, selectCard } from './cardSlice';

export function Counter() {
  const count = useSelector(selectCard);
  const [cardSlice, setCardSlice] = useState('');

  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  console.log('card slice', cardSlice);
  console.log('increment', increment);

  return <div>hi</div>;
}
