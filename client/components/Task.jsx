import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme } from '@material-ui/core/styles';

const themes = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#3f50b5',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: themes.palette.primary.dark,
  },
  name: {
    backgroundColor: themes.palette.primary.dark,
    color: themes.palette.primary.contrastText,
  },
  detail: {
    backgroundColor: themes.palette.primary.light,
    paddingLeft: theme.spacing(4),
  },
}));

const Task = (props) => {
  const classes = useStyles();
  return (
      <List dense className={classes.root}>
        <ListItem className={classes.name}>
          <ListItemSecondaryAction>
            <Checkbox
              defaultUnchecked
              color='secondary'
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </ListItemSecondaryAction>
          <strong>{props.name}</strong>
        </ListItem>
        <ListItem button className={classes.detail}>
          {props.detail}
          {props.complete}
        </ListItem>
      </List >
  )
}

export default Task;
