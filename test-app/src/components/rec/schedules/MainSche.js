import { useState, useEffect } from 'react'
import Scheduler from './Scheduler'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
// import SchedulerII from './SchedulerII'

export  const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/appointments')
    const data = await res.json()
    // console.log(data)
    return data
}

export const FIELDS = {
    T1: 'Tennis 1',
    T2: 'Tennis 2',
    T3: 'Tennis 3',
    OD: 'OutDoor',
}
export const area = ['Tennis 1','Tennis 2','Tennis 3','OutDoor', 'Tennis']


function MainSche() {
 
    const [apps, setApps] = useState([]); 
    const [crtField, setCrtField] = useState('Tennis 1')



    useEffect(() =>{
        const getReservs = async () => {
            const data = await fetchProds()
            setApps(data)
        }
        getReservs()
    }, [])

    const StartSchedule=()=>{

    }

    const getAppsbyField = () =>{
        if(crtField == 'Tennis'){
            return apps.filter((el)=>el.area== 'Tennis 1' || el.area== 'Tennis 2' || el.area== 'Tennis 3')
        } else  {
            return apps.filter((el)=>el.area== crtField)
        }
        // console.log(aux)
    }


    const addApp = (newapp) =>{
        // console.log(newapp)
        apps.push(newapp)
        // console.log(apps)
        setApps(apps)
    }


    return (
        <div>
            <Autocomplete
                id="field-picker"
                value={crtField}
                onChange={(event, newValue) => {
                    setCrtField(newValue);
                }}
                // inputValue={inputValue}
                // onInputChange={(event, newInputValue) => {
                //     setCrtField(newInputValue);
                // }}
                options={area}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />
                }
            />
            {/* {getAppsbyField(), apps ? <div key={getAppsbyField()} ><Scheduler  apps={getAppsbyField()}
                                                    upApp = {addApp}
                                     /></div> : null  } */}
        </div>
    )
}

export default MainSche
