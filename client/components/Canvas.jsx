import React, { Component } from 'react';
//import { connect } from 'react-redux';
// (stateful component)
import Board from './Board';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



class Canvas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
            {/* <Grid item xs={6}>
              <Board className={classes.paper}>xs=6</Board>
            </Grid> */}
            {/* <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid> */}
          </Grid>
      </div>
    );
  }
}

//  export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
export default Canvas;
