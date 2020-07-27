import React from 'react';
import { useDispatch } from 'react-redux';
import { getLogin } from './loginSlice';

export function LoginTest() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(getLogin('Kevin'));
        }}
      >
        Sign Up HardCoded
      </button>
      {/* <button
        onClick={() => {
          fetch('/server/login')
            .then((resp) => resp.json())
            .then((data) => {
              dispatch(getLogin(data));
            });
        }}
      >
        Ping Login
      </button> */}
    </div>
  );
}
