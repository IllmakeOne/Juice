import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoneyIcon from '@material-ui/icons/Money'
import NotificationsIcon from '@material-ui/icons/Notifications';
import DescriptionIcon from '@material-ui/icons/Description';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BuildIcon from '@material-ui/icons/Build';
import TranslateIcon from '@material-ui/icons/Translate';
import ContactsIcon from '@material-ui/icons/ImportContacts';

import logo from "../assets/logo.png"

import { Route, Link, BrowserRouter as Router } from "react-router-dom";


import MainBar , {BarScreen} from './bar/MainBar'

const routes = {
  "/bar": () => <MainBar />
};

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <FormatListBulletedIcon />
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

          <IconButton aria-label="money" color="inherit">
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
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit">
                <TranslateIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
      </AppBar>
      {/* <MainBar startScreen = {BarScreen.SELLBAR}/> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div />
        <div className={classes.logoDivStyle}>      
           <img src={logo} alt="Logo" className={classes.logoStyle} />
        </div>

        <Divider classes={{root: classes.divider}}/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{ color: "white"}} >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText style={{ color: "white"}} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider classes={{root: classes.divider}}/>
        <List>
          <ListItem>
              <div>
                <Router>
                  <ul>
                    <li>
                      <Link to="/bar">Bar</Link>
                    </li>
                  </ul>
                  <Route path="/bar" component={MainBar} />   
                </Router>
              </div>
          </ListItem>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{ color: "white"}}>{index % 2 === 0 ? <BuildIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText style={{ color: "white"}} primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}



const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  sideBarEntry:{
    color:"white",
  },


  root: {
    display: 'flex',
  },

  divider: {
    // Theme Color, or use css color in quote
    background: 'white',
   },

  logoStyle: {
    crop: "fill",
    width: "83%",
},

logoDivStyle: {
  justifyContent: "center",
  alignItems: "center",
},

  appBar: {
    borderLeft: "1px solid white",
    background:"#1565c0",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background:"#1565c0",
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },


  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
 
  inputRoot: {
    color: 'inherit',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

}));