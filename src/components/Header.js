import React from 'react'
import {AppBar, Toolbar, IconButton,
MenuIcon,Typography,Button} from '@material-ui/core'
import "./Header.css"

  
const Header = () =>{

    return <AppBar position="sticky" style={{"backgroundColor" : "#03bb85", "height": "100px"}}>
    <Toolbar>
 
      
      <Typography variant="h6" >
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>


};

export default Header;