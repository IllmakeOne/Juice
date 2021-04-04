import { useState, useEffect } from 'react'
import ScheduleTabs from './pieces/ScheduleTabs'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { fetchAppoitments, fetchApprow} from '../../DBconn'
import { GridRow, GridColumn } from 'emotion-flex-grid'


import WeekSchedule from '../schedules/scheds/WeekSchedule'
import FieldChanger from './pieces/FieldChanger'
import DateChanger from './pieces/DateChanger'
import AddApp from './pieces/AddApp'



export const FIELDS = {
    T1: 'Tennis 1',
    T2: 'Tennis 2',
    T3: 'Tennis 3',
    OD: 'OutDoor',
}
export const area = ['Tennis 1','Tennis 2','Tennis 3','OutDoor', 'Tennis']


function MainSche() {

    
    const [open, setOpen] = useState(false)
    
    const [crtField, setCrtField] = useState('Hall')
    const [today, setToday] = useState(new Date)
    const [weekMutiplier, setWeekMutiplier] = useState(0)


    const StartSchedule=()=>{

    }

    const setDialog = (state) =>{
        setOpen(state)
    }


    const onCellClick = (id) => {
        console.log(id)
    }


    return (
        <div className='cart_svlist'>
        <br/>
            <br/>
            <br/>
            <br/>
{/* 
        <ScheduleTabs /> */}

            <GridRow>
                <FieldChanger 
                    changeField = {setCrtField}
                    />
                  
                <GridColumn offset ={6}>
                    <DateChanger 
                        weekMutiplier = {weekMutiplier}
                        changeDateMultiplier = {setWeekMutiplier}
                        today = {today}
                        settoday = {setToday}
                        onCellClick={onCellClick}
                        />
                </GridColumn>
            </GridRow>

            
              <WeekSchedule 
                field = {crtField} 
                today = {today} 
                week = {weekMutiplier}
                setDialog = {setDialog}
                />
         

            <AddApp 
                open = {open} 
                setDialog = {setDialog}
                />
        </div>
    )
}

export default MainSche
