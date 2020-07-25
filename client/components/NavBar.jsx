import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/icon.png';


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                <img src={logo} style={{width: 75, height: 25}}></img>
                | then navigation
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;