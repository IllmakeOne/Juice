import {useState, useEffect} from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import { Button, Input, TextField } from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles'

import WeekSchedule from '../scheds/WeekSchedule'
import DaySchedule from '../scheds/DaySchedule'
import ColumnDateField from './ColumnDateField';
import TennisSchedule from '../scheds/TennisSchedule';

import moment  from 'moment'


function ScheduleTabs() {
      
  const classes = useStyles()


  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

    

  const [mouse, setMouse] = useState({x:0, y:0})


  return (
      <div>
          <AppBar position="static" >
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className= 'clientInfoTabs'>
                  <Tab className={classes.tab} label="Week View" {...a11yProps(0)} />
                  <Tab className={classes.tab} label="Day View" {...a11yProps(1)} />
                  <Tab className={classes.tab} label="TWeek View" {...a11yProps(2)} />
                  <Tab className={classes.tab} label="Tennis" {...a11yProps(3)} />
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
              <WeekSchedule />
          </TabPanel>
          <TabPanel value={value} index={1}>
              <DaySchedule/>
          </TabPanel>
          <TabPanel value={value} index={2}>
              
              {/* <ColumnDateField date={'02-06-21'} field = {'Hall'}/> */}
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TennisSchedule />
          </TabPanel>
      </div>
    )
}


const useStyles = makeStyles({
  tab: {
      fontWeight: 'bold',
      background: '#ffd561',
  },
})

export default ScheduleTabs
