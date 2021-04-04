import {useEffect, useState} from 'react'

import { getAppsByDateandField, getTennisCourts }  from '../../../DBconn'
import { GridRow, GridColumn } from 'emotion-flex-grid'

      
import FullCell from '../cells/FullCell'    
import EmptyCell from '../cells/EmptyCell'
import { Paper } from '@material-ui/core'

import  {getCrtWeek, getNextWeek } from '../pieces/DatesMethods'




const dayLenght = 38

function ColumnDateField({date, field, _mouseMove, onDubClick}) {



    const [apps, setApps] = useState([])

    const handleMouseMove = (id) => {
        _mouseMove(id)
    }

    const makeApp = (id) => {
        onDubClick(id, date)
    }

    

    useEffect(() =>{
        // console.log(date)
        // console.log(field)
        const getApps = async () => {
            if(field === 'Tennis') {
                var serverApps = await getTennisCourts({date})
                // console.log(serverApps)
                setApps(serverApps)

            } else {
                const serverApps = await getAppsByDateandField({date,field})
                // console.log(serverApps)
                setApps(serverApps)
            }
        }
        getApps()
    }, [])


    const generateLine = () => {
        var ret = []
        var i, j


        if(field ==  'Tennis') { 
            ret.push([])
            ret.push([])
            ret.push([])                
        // apps.map(dayApps => {console.log(dayApps) })


            tennisCourts.map((court) => {
                const crtField = parseInt(court.substring(1)) - 1

                for ( i = 0;i < dayLenght ; i++) {

                    const aux = apps.filter(el => el.field == court).filter(el => el.id==i).filter(el => el.date===date )

                    if (aux.length != 0){
                        const el = aux[0]
                        i+= el.duration - 1
                        const height = el.duration * 25

                        ret[crtField].push(
                            <Paper 
                                elevation={3} style={{height:height }} 
                                onClick={()=>handleMouseMove(el.id)}
                                >
                                <FullCell app={el}/>
                            </Paper>)
                    } else {
                        const auxi = i
                        ret[crtField].push(
                            <Paper 
                                elevation={2} 
                                onDoubleClick = {()=>makeApp(auxi)}
                                onClick={()=>handleMouseMove(auxi)}>
                                <EmptyCell i={i}/> 
                            </Paper>
                        )
                    }
                }
            })
                return (
                    <div>
                        <GridRow wrap='wrap' >
                            <GridColumn width={4}>
                                {ret[0]}
                            </GridColumn>
                            <GridColumn width={4}>
                                {ret[1]}
                            </GridColumn>
                            <GridColumn width={4}>
                                {ret[2]}
                            </GridColumn>
                        </GridRow>
                    </div>
                )

        } else { // if it not tennis(or aerobic) fill it normally, with one column for each day
            for ( i = 0;i < dayLenght ; i++){
                const aux = apps.filter(el => el.id==i).filter(el => el.date === date)
                if (aux.length != 0){
                    const el = aux[0]
                    
                    i+= el.duration - 1

                    const height = el.duration * 25
                    ret.push(
                        <Paper elevation={3} style={{height:height }} 
                            onClick={()=>handleMouseMove(el.id)}>
                            <FullCell app={el} />
                        </Paper>)

                } else {//if there is nothing scheudle for this hour
                    const auxi=i
                    ret.push(
                        <Paper 
                            elevation={2} 
                            onDoubleClick = {()=>makeApp(auxi)}
                            onClick={()=>handleMouseMove(auxi)}
                            >
                                <EmptyCell i={i}/> 
                        </Paper>
                        )
            }
        }
            return ret
        }
    }



    return (
        <div>
            {/* {console.log(getNextWeek(new Date))} */}
            {generateLine()}
        </div>
    )
}


const columns = [
    'Hall',
    'OutDoor',
    'Aerobic',
]

const tennisCourts = [
    'T1',
    'T2',
    'T3'
]

export default ColumnDateField
