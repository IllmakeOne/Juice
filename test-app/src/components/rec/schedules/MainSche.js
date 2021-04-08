import { useState, useContext, useEffect } from 'react'
import ScheduleTabs from './pieces/ScheduleTabs'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { fetchAppoitments, fetchApprow} from '../../DBconn'
import { GridRow, GridColumn } from 'emotion-flex-grid'


import WeekSchedule from '../schedules/scheds/WeekSchedule'
import FieldChanger from './pieces/FieldChanger'
import DateChanger from './pieces/DateChanger'
import AddApp from './pieces/AddApp'
import { MyContext } from '../../../App'
import { getWeek } from './pieces/DatesMethods'
import DummyWeek from './scheds/DummyWeek'
import FieldAndDateChanger from './pieces/shedspieces/FieldAndDateChanger'
import AddDummyApp from './pieces/shedspieces/AddDummyApp'



export const FIELDS = {
    T1: 'Tennis 1',
    T2: 'Tennis 2',
    T3: 'Tennis 3',
    OD: 'OutDoor',
}
export const area = ['Tennis 1','Tennis 2','Tennis 3','OutDoor', 'Tennis']


function MainSche() {
    const cx = useContext(MyContext) 

    
    const [open, setOpen] = useState(false)
    const [openDubbmy, setOpenD] = useState(false)
    
    const [crtField, setCrtField] = useState('Hall')
    const [today, setToday] = useState(new Date)
    const [weekMutiplier, setWeekMutiplier] = useState(0)
    const [info, setInfo] = useState({})

    const changeToday = (newDate) =>{
        setToday(newDate)
        setWeekMutiplier(0)
        // console.log(newDate)
    }



    // const settodaypicker = (newDate) =>{
    //     setToday(newDate)
    //     setWeekMutiplier(0)
    // }

    const chageField = (newF) =>{
        setCrtField(newF)
    }

    const openAppDialog = (id, date) =>{
        setInfo({time: id, date: date})
        setOpen(true)
    }
    
    const closeAppDialog = () => {
        setOpen(false)
    }

    const openDummyAppDialog = (id, date) =>{
        setInfo({time: id, date: date})
        setOpenD(true)
    }
    const closeDummyApp= ()=>{
        setOpenD(false)
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

            <FieldAndDateChanger 
                changeField = {chageField}
                weekMutiplier = {weekMutiplier}
                changeDateMultiplier = {setWeekMutiplier}
                today = {today}
                settoday = {changeToday}
                />
          

            <WeekSchedule 
                field = {crtField} 
                today = {today}
                weekMutiplier = {weekMutiplier}
                setDialog = {openAppDialog}
                />

            <FieldAndDateChanger 
                changeField = {chageField}
                weekMutiplier = {weekMutiplier}
                changeDateMultiplier = {setWeekMutiplier}
                today = {today}
                settoday = {changeToday}
                />
            
            <DummyWeek 
                field = {crtField} 
                today = {today}
                weekMutiplier = {weekMutiplier}
                setDialog = {openDummyAppDialog}
                />



            <AddApp 
                open = {open} 
                closeAppDialog = {closeAppDialog}
                info={{...info, field: crtField}}
                />
                
            <AddDummyApp 
                open = {openDubbmy} 
                closeDummyAppDialog = {closeDummyApp}
                info={{...info, field: crtField}}
                />
        </div>
    )
}

export default MainSche
