import React, { Component } from 'react';
//import { connect } from 'react-redux';
// (stateful component)
import Board from './Board';
import NavBar from './NavBar';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// const mapStateToProps = state => ({});
// const mapDispatchToProps = dispatch => ({});

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color:'#363738',
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Roboto',
  },
});



class Canvas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (


      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <Typography className={classes.heading}>To Do:</Typography>
              <Board id='todo'/>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
            <Typography className={classes.heading}>In Progress:</Typography>
              <Board id='inProgress'/>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
            <Typography className={classes.heading}>Completed:</Typography>
              <Board id='complete'/>
            </Paper>
          </Grid>
        </Grid >

      </div>
    );
  }
}

//  export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
export default withStyles(useStyles)(Canvas);
