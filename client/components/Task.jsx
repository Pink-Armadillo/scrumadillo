import React from 'react';
import { Test } from '../reducers/card';
import { LoginTest } from '../reducers/login';
import { DeckTest } from '../reducers/deck';
const Task = () => {
  return (
    <div>
      <Test />
      <LoginTest />
      <DeckTest />
      test in task
    </div>
  );
};

export default Task;
