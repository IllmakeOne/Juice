import { useState, useContext } from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { fetchApprow } from '../../../DBconn'
import { Button, Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'      
import FullCell from '../cells/FullCell'    
import EmptyCell from '../cells/EmptyCell'
import ColumnDateField from '../pieces/ColumnDateField'


import  { getWeek } from '../pieces/DatesMethods'

import { MyContext } from '../../../../App'

 

const WeekSchedule = ( {field,today, weekMutiplier, setDialog, closeDialogue} ) => {
    const cx = useContext(MyContext) 

    const classes = useStyles()

    const week = getWeek(today,weekMutiplier, cx.lg)

    const [timeHighlight,setTimeHighlight] = useState(-1)

    const handleMousemove = (id) => {
        setTimeHighlight(id)
    }

    const onCellClick = (id) => {
        console.log(id)
    }

    const onDubClick = (id, date) => {
        setDialog(id, date)
    }


       return (

        <div className=''>
            
            <GridRow wrap='wrap' >
                <GridColumn width= {1} className = {classes.column}>
                    <Paper elevation={3} >
                         <div style={{    
                            height: 60,   
                            textAlign: 'center',
                            fontSize: 20,
                                }}>{cx.lg=='en'? 'Times':'Ore'}</div> 
                    </Paper>
                    <GridColumn >
                        {times.map((el,index)=>(
                            <Paper elevation={3} >
                                <div className={index == timeHighlight? classes.timeCellHighlight:classes.emptycell}>{el}</div>
                            </Paper>)
                        )}
                    </GridColumn>
                </GridColumn>

                {//console.log(thisWeek),
                week.map((el)=>{
                    return(
                        <GridColumn width={1.4} className = {classes.column}> 
                            <Paper elevation={3} className={classes.daynameCell}>
                                <div >{el[0]} 
                                   <br/> {el[1]}
                                </div>
                            </Paper>
                            
                            <ColumnDateField
                                    date= {el[1]}
                                    field= {field} 
                                    _mouseMove ={handleMousemove}
                                    onCellClick ={onCellClick}
                                    onDubClick = {onDubClick} />

                        {/* {genLine(el[1])} */}
                        </GridColumn>                        
                    )
                })}
            </GridRow>
        </div>
       )
}








const useStyles = makeStyles({
    column:{
        margin: 3,

    },

    cellocasional:{
        border: 'solid',
        borderWidth: 1,
        borderColor: '#f28313',
        textAlign: 'center',
        height: '100%',
        borderRadious: '1px',
        background: 'rgb(79, 248, 1)',
    },

    cellsub:{
        border: 'solid',
        borderWidth: 1,
        borderColor: '#f28313',
        textAlign: 'center',
        height: '100%',
        borderRadious: '1px',
        background: '#f4ff94',
    },

    celltrainer:{
        border: 'solid',
        borderWidth: 1,
        borderColor: '#f28313',
        textAlign: 'center',
        height: '100%',
        borderRadious: '1px',
        background: '#0aeefa    ',
    },

    emptycell:{
        background: 'white',    
        height: 25,   
        textAlign: 'center',
    },

    timeCellHighlight:{
        background: 'white',    
        height: 25,   
        textAlign: 'center',
        
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgb(100, 125, 235)'
    },

    daynameCell:{
        background: '#0cbff5',    
        height: 60,   
        // borderLeft: 'solid',
        // borderRight: 'solid',
        // borderWidth: 1,
        textAlign: 'center',
        fontSize: 23,

        position: 'sticky',
        top: 73,

    }
  });

  const dayLenght = 38 //it is counted in half hours 
    const weekDays=[//this will be made into a function for the current day
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday']
        
    const zileleSaptamanii=[
        'Luni', 
        'Marti',
        'Miercuri',
        'Vineri', 
        'Sambata',
        'Duminica']
    

    export const times = [//'Times',
        '07:00-07:30',
        '07:30-08:00',
        '08:00-08:30',
        '08:30-09:00',
        '09:00-09:30',
        '09:30-10:00',
        '10:00-10:30',
        '10:30-11:00',
        '11:00-11:30',
        '11:30-12:00',
        '12:00-12:30',
        '12:30-13:00',
        '13:00-13:30',
        '13:30-14:00',
        '14:00-14:30',
        '14:30-15:00',
        '15:00-15:30',
        '15:30-16:00',
        '16:00-16:30',        
        '16:30-17:00',
        '17:00-17:30',
        '17:30-18:00',
        '18:00-18:30',
        '18:30-19:00',
        '19:00-19:30',
        '19:30-20:00',
        '20:00-20:30',        
        '20:30-21:00',
        '21:00-21:30',
        '21:30-22:00',
        '22:00-22:30',
        '22:30-23:00',
        '23:00-23:30',
        '23:30-24:00',
        '00:00-00:30',
        '00:30-01:00',
        '01:00-01:30',
        '01:30-02:00',
    ]

export default WeekSchedule
