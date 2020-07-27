import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/icon.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { getCards, selectDeck } from '../reducers/deckSlice';
import { getAll } from '../reducers/cardSlice';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 'auto',
  },
  button2: {
    marginRight: 'auto',
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { deck } = useSelector(selectDeck);
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <img src={logo} style={{ width: 165, height: 80 }}></img>
          </IconButton>
          <Button
            className={classes.button2}
            id="getCards"
            onClick={() => {
              fetch('/server/cards')
                .then((resp) => resp.json())
                .then((data) => {
                  dispatch(getCards(data));
                  dispatch(getAll(data));
                });
              document.querySelector('#getCards').style.display = 'none';
            }}
          >
            Add Cards
          </Button>

          <Button className={classes.button} onClick={props.logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
