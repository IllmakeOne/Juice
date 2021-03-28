import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


import MoneyIcon from '@material-ui/icons/Money'
import NotificationsIcon from '@material-ui/icons/Notifications';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import TranslateIcon from '@material-ui/icons/Translate';
import ContactsIcon from '@material-ui/icons/ImportContacts';


export default function MyAppBar(){
    const classes = appBarStyles()
    return(
      <AppBar position="fixed" className={classes.appBar}>
      <MyToolBar></MyToolBar>
      </AppBar>
    );
  }


  

  function MyToolBar(){
    const classes = appBarStyles()
      return(
        <Toolbar>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>

        {/* <IconButton aria-label="money" color="inherit">
              <MoneyIcon />
          </IconButton>

          <IconButton aria-label="descripion" color="inherit">
              <DescriptionIcon />
          </IconButton>

          <IconButton aria-label="contacts" color="inherit">
              <ContactsIcon />
          </IconButton>

        <IconButton aria-label="shopping cart" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton aria-label="wrench " color="inherit">
              <BuildIcon />
          </IconButton>

          <IconButton aria-label="notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>*/}
{/* 
          <IconButton aria-label="show 17 new notifications" color="inherit">
              <TranslateIcon />
          </IconButton>  */}

          {/* <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle /> 
          </IconButton>*/}
        </div>

        
        {/* FOR MOBILE/SMALLER SCREENS. Might be unnecessary to implement
         <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div> 
        */}

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
  
  }));