import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ListItemIcon, Typography } from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createBrowserHistory } from "history";

import HomeIcon from '@material-ui/icons/Home'

import logo from "../../assets/logo.png"

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import MainBar from './../bar/MainBar'
import MainRec from './../rec/MainRec';
import StartScreen from './../StartScreen';
import StockHandler from './../bar/stockmanagement/StockHandler';
import MainSche from './../rec/schedules/MainSche';

const history = createBrowserHistory();
export default function MyDrawer(){
  const classes = drawerStyles();

    return(
    <Router history={history}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      
     <div className={classes.logoDivStyle}>      
           <img src={logo} alt="Logo" className={classes.logoStyle} />
        </div> 

        <Divider classes={{root: classes.divider}}/>
        <List>

        <ListItem
            button
            component={Link}
            to="/"
          >
            <ListItemIcon style={{color:"white"}}><HomeIcon></HomeIcon></ListItemIcon>

             <ListItemText
               disableTypography
               primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Home</Typography>}
             />
          </ListItem>
        
          <ListItem
            button
            component={Link}
            to="/bar"
          >
            <ListItemText
               disableTypography
               primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Bar</Typography>}
             />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/rec"
          >
            <ListItemText
               disableTypography
               primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Reception</Typography>}
             />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/newitem"
          >
            <ListItemText
               disableTypography
               primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>New Item</Typography>}
             />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/rec/sche">

            <ListItemText
               disableTypography
               primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Scheduler</Typography>}
             />
          </ListItem>

        </List>
        
        </Drawer>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/bar" component={MainBar} />
        <Route path="/rec" component={MainRec} />   
        <Route path="/newitem" component={StockHandler} />  
        <Route path='/rec/sche' component={MainSche} />  
    </Router>
    );
}


const drawerWidth = 200;

const drawerStyles = makeStyles((theme) => ({
  sideBarEntry:{
    color:"white",
  },

  divider: {
    // Theme Color, or use css color in quote
    background: 'white',
   },

  logoStyle: {
    crop: "fill",
    width: "83%",
    pointerEvents: "all",
},

logoDivStyle: {
  justifyContent: "center",
  alignItems: "center",
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


}));