import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


import MoneyIcon from '@material-ui/icons/Money'
import NotificationsIcon from '@material-ui/icons/Notifications';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import TranslateIcon from '@material-ui/icons/Translate';
import ContactsIcon from '@material-ui/icons/ImportContacts';


export default function MyAppBar({changeGlobal}){
    const classes = appBarStyles()
    return(
      <AppBar position="fixed" className={classes.appBar}>
      <MyToolBar changeGlobal={changeGlobal}></MyToolBar>
      </AppBar>
    )
  }
  

  function MyToolBar({changeGlobal}){
    const classes = appBarStyles()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleCloseButton = (language) => {
      changeGlobal({lg: language})
      setAnchorEl(null)
    }

    
    const handleClose = () => {
      setAnchorEl(null)
    }
      return(
        <Toolbar>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>

          <Button aria-controls="simple-menu" aria-haspopup="true" 
                className={classes.menubutton} onClick={handleClick}>
              Change Language
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem  onClick={()=>handleCloseButton('en')}>English</MenuItem>
            <MenuItem  onClick={()=>handleCloseButton('ro')}>Romanian</MenuItem>            
          </Menu>
        </div>

  

      </Toolbar>
      )
  }


  const drawerWidth = 200
  const appBarStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 100,
      
    },
  
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },

    appBar: {
        borderLeft: "1px solid white",
        background:"#1565c0",
        width: `calc(100% - ${drawerWidth}px)`,
        height:  '4.5%' ,
        marginLeft: drawerWidth,
      },

      menubutton:{
      background: 'lightblue'

    }
  
  }));