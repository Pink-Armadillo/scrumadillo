import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/icon.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
    return(
        <div>
        <AppBar position="static" color="transparent">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton}>
                <img src={logo} style={{ width: 165, height: 80 }}></img>
              </IconButton>
                <Button className={classes.button}>Logout</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;