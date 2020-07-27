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
      light: '#E3E1E2',
      main: '#3f50b5',
      dark: '#DED7DE',
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
  },
  detail: {
    backgroundColor: themes.palette.primary.light,
    paddingLeft: theme.spacing(4),
  },
}));

const Task = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    document.querySelector('#details').style.display = 'none';
  }
  return (
    <List dense className={classes.root}>

      <ListItem >
        <ListItemSecondaryAction>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </ListItemSecondaryAction>
        <strong>{props.name}</strong>
      </ListItem>

      <ListItem id='details' button className={classes.detail} >
          {props.detail}
          {props.complete}
        </ListItem>
    </List >
  )
}

export default Task;
