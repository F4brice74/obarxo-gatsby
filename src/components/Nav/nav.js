import React, { useState } from 'react';
import { Link } from "gatsby";


// Import Material ui

import {
  Grid,
  Drawer,
  Button,
  MenuItem,
  AppBar,
  Toolbar,
} from '@material-ui/core'


// import local
import './nav.scss';



const Nav = () => {

  
  const [drawerOpen, setdrawerOpen] = useState(false);

  const toggleDrawerButton = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setdrawerOpen(!drawerOpen)
  };
  return (
    <Grid item xs={12} container>
      <Toolbar
        className="desktopAppbar">
        <Link className="btn from-center" smooth to="/#home">Hello</Link>    
     
      </Toolbar>



      <AppBar
        className="mobileAppbar"
        position="fixed"
        color="inherit"
      >
        <div >
          <Button onClick={toggleDrawerButton} >
            Menu
        </Button>
          <Drawer className="mobileAppbar" open={drawerOpen} onClose={toggleDrawerButton}>
            <MenuItem onClick={toggleDrawerButton}><Link className="list" to="/">Accueil</Link></MenuItem>
                       
          </Drawer>
        </div>
      </AppBar>

    </Grid>



  );
};

export default Nav;