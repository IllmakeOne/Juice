import { useState, useEffect } from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { fetchApprow } from '../../DBconn'
import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'      


const m = 36
const n = 7
const no = 4


const Scheduler = ({apps}) => {
    // console.log(apps)
    
    const dayLenght = 36 //it is counted in half hours 
    var day = []
    const weekDays=[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday']

    const times = ['Times',
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

    const classes = useStyles()

    const populateGridRow = () =>{
        for (var i= 0; i< dayLenght; i++){
            day.push('dab')
        }
    }

    const abprt = () =>{
        console.log('sadsad')
    }

    const onHoover = () =>{ 
        // console.log('aaaaa')
    }

    const genLine = () => {
        var ret = []
        apps.map((el) => {
            switch(el.status){
                case 'open':
                    ret.push(
                    <Paper elevation={3} >
                        <div className={classes.cell} onMouseEnter={()=>onHoover()} onClick={()=>abprt()}>AA</div>
                    </Paper>)
                case 'ocasional':
                    ret.push(
                    <Paper elevation={3} >
                        <div className={classes.cellocasional} onMouseEnter={()=>onHoover()} onClick={()=>abprt()}>AA</div>
                    </Paper>)
                default:
                    ret.push(
                        <Paper elevation={3} >
                            <div className={classes.cell} onMouseEnter={()=>onHoover()} onClick={()=>abprt()}>AA</div>
                        </Paper>)
            }
        })
            
        return ret
    }


       return (

        <div className='cart_svlist'>
            
            <GridRow wrap='wrap'>
                <GridColumn width= {.7}>
                    {times.map((el)=>(
                         <Paper elevation={3} >
                            <div className={classes.cell} >{el}</div>
                        </Paper>)
                    )}
                </GridColumn>
                {weekDays.map((el)=>{
                    return(
                        <GridColumn width={1.5}>
                        <div>{el}</div>
                        {genLine()}
                        </GridColumn>                        
                    )
                })}
            </GridRow>
        </div>
       )
}








const useStyles = makeStyles({
    cell:{
        border: 'solid',
        textAlign: 'center',
      
        // borderRadious: '0.5px',
        background: 'cyan',
        
      },

      cellocasional:{
        border: 'solid',
        textAlign: 'center',
      
        borderRadious: '1px',
        background: 'rgb(79, 248, 1)',
        
      },
      
      timecell:{
          width: '50px'
      }

  });

export default Scheduler
