import { useState, useEffect } from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { fetchApprow } from '../../DBconn'
import { Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'      



const Scheduler = ({apps}) => {
    // console.log(apps)
    
    

    const classes = useStyles()

    const abprt = (id) =>{
        console.log(id)
    }

    const onHoover = () =>{ 
        // console.log('aaaaa')
    }

    const generateLine = (apps) => {
        var ret = []
        var i
        for ( i = 1;i < dayLenght ; i++){
            const aux = apps.filter(el => el.id==i)
            if (aux.length != 0){
                const el = aux[0]
                console.log(el.duration)
                
                i+= el.duration -1

                switch(el.status){
                    case 'ocasional':{
                        const aux = el.duration * 25
                        ret.push(
                        <Paper elevation={3} style={{height:aux }}>
                            <div className={classes.cellocasional} onMouseEnter={()=>onHoover()} onClick={()=>abprt(el.id)}>AA</div>
                        </Paper>)
                        break
                        }
                        
                    case 'trainer':{
                        const aux = el.duration * 25
                        ret.push(
                        <Paper elevation={3} style={{height:aux }}>
                            <div className={classes.celltrainer} onMouseEnter={()=>onHoover()} onClick={()=>abprt(el.id)}>AA</div>
                        </Paper>)
                        break
                        }
                        
                    case 'sub':{
                        const aux = el.duration * 25
                        ret.push(
                        <Paper elevation={3} style={{height:aux }}>
                            <div className={classes.cellsub} onMouseEnter={()=>onHoover()} onClick={()=>abprt(el.id)}>AA</div>
                        </Paper>)
                        break
                        } 
                }

            } else {
                const aux = i
                ret.push(
                    <Paper elevation={1} >
                        <div className={classes.emptycell} onMouseEnter={()=>onHoover()} onClick={()=>abprt(aux)}></div>
                    </Paper>)
            }
        }
        return ret 

    }

    const genLine = (today) => {
        return generateLine(apps.filter(el => el.date == today))
    }


       return (

        <div className='cart_svlist'>
            
            <GridRow wrap='wrap' >
                <GridColumn width= {.7} className = {classes.column}>
                    <div className={classes.emptycell}>Times</div> 
                    <GridColumn >
                        {times.map((el)=>(
                            <Paper elevation={3} >
                                <div className={classes.emptycell}>{el}</div>
                            </Paper>)
                        )}
                    </GridColumn>
                </GridColumn>

                {weekDays.map((el)=>{
                    return(
                        <GridColumn width={1.5} className = {classes.column}>
                        <div className={classes.daynameCell}>{el[0]}</div>
                        {genLine(el[1])}
                        </GridColumn>                        
                    )
                })}
            </GridRow>
        </div>
       )
}








const useStyles = makeStyles({
    column:{
        margin: 4,

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

    daynameCell:{
        background: '#0cbff5',    
        height: 25,   
        borderLeft: 'solid',
        borderRight: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,

    }
  });

  const dayLenght = 38 //it is counted in half hours 
    const weekDays=[//this will be made into a function for the current day
        ['Monday','30-05-21'],
        ['Tuesday','31-05-21'],
        ['Wednesday','01-06-21'],
        ['Thursday','02-06-21'],
        ['Friday','03-06-21'],
        ['Saturday','04-06-21'],
        ['Sunday','05-06-21']]

    const times = [//'Times',
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

export default Scheduler
