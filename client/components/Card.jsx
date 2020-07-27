import React from 'react';

import Task from './Task';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'theme.palette.text.secondary',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#363738',
    fontWeight: theme.typography.fontWeightBold,
  },
  task: {
    textAlign: 'center',
  },
  box: {
    marginRight: 'auto',
  },
}));

const Card = (props) => {
  const classes = useStyles();
  // } else if (props.id === 'stack') {
  //   <div className={classes.root}>
  //     <Paper className={classes.paper}>{props.name}</Paper>
  //   </div>;

    const todoArray = [];
    if (props.card) {
      let todo = props.card.todo;
      console.log('in cards', props.card.todo);

      for (let i = 0; i < todo.length; i += 1) {
        todoArray.push(
          <div>
            <Task 
            name={todo[i].taskName}
            detail={todo[i].details}
            complete={todo[i].completed}
            />
          </div>
        );
      }
    }
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography className={classes.heading}>
            {props.name}
          </Typography>
          <br />
          <a href={props.url} target="_blank"><em>{props.url}</em></a>
          {todoArray}
        </Paper>
      </div>
    );
    };

export default Card;
