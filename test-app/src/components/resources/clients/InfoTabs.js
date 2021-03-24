import {useState, useEffect} from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import { Button, Input, TextField } from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles'

import SubHBox from './SubHBox'




function InfoTabs({subH, entryH}) {
  
    const classes = useStyles()

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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

    return (
        <div>
            <AppBar position="static" >
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className= 'clientInfoTabs'>
                    <Tab className={classes.tab} label="Sub History" {...a11yProps(0)} />
                    <Tab className={classes.tab} label="Entry History" {...a11yProps(1)} />
                    <Tab className={classes.tab} label="Other" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
               <Paper style={{height: 650, overflow: 'scroll'}}>
                  {/* <div className={`${classes.subsriptionH} ${classes.shadow}`} > */}
                      {basicSubscribtionHistory.map( (el) =>(
                              <SubHBox sub = {el}/>
                      ))}
                  {/* </div> */}
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/* display all entries*/}
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    )
}


const useStyles = makeStyles({
  tab: {
      fontWeight: 'bold',
  },

})




const basicSubscribtionHistory=[{
  "type": "F10",
  "left": 10,
  'start': '2/4/2021',
  "end": "8/8/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/4/2021',
  "end": "15/5/2021"
},{
  "type": "F10",
  "left": 10,
  'start': '2/4/2021',
  "end": "2/5/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},{
  "type": "F10",
  "left": 10,
  'start': '02/04/2021',
  "end": "02/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
{
  "type": "FF",
  "left": -1,
  'start': '15/04/2021',
  "end": "15/05/2021"
},
]

export default InfoTabs
