import { useState, useEffect } from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { fetchApprow } from '../../DBconn'
import { Paper } from '@material-ui/core'

const m = 36
const n = 7
const no = 4


const Scheduler = ({apps}) => {
    // console.log(apps)
    
    const dayLenght = 36 //it is counted in half hours 
    var day = []
    const weekDays=['Time', 
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday']


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
                        <div className='cell' onMouseEnter={()=>onHoover()} onClick={()=>abprt()}>AA</div>
                    </Paper>)
                case 'ocasional':
                    ret.push(
                    <Paper elevation={3} >
                        <div className='cellocasional' onMouseEnter={()=>onHoover()} onClick={()=>abprt()}>AA</div>
                    </Paper>)
                default:
                    ret.push(
                        <Paper elevation={3} >
                            <div className='cell' onMouseEnter={()=>onHoover()} onClick={()=>abprt()}>AA</div>
                        </Paper>)
            }
        })
            
        return ret
    }


       return (

        <div className='cart_svlist'>
            
            <GridRow wrap='wrap'>
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

export default Scheduler
