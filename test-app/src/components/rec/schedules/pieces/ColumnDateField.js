import {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'      

import { getAppsByDateandField, getTennisCourts }  from '../../../DBconn'
import { GridRow, GridColumn } from 'emotion-flex-grid'

      
import FullCell from '../cells/FullCell'    
import EmptyCell from '../cells/EmptyCell'
import { Paper } from '@material-ui/core'

import  {getCrtWeek, getNextWeek } from '../pieces/DatesMethods'
import { red } from '@material-ui/core/colors'




const dayLenght = 38

function ColumnDateField({date, field, _mouseMove, onDubClick, rowLight}) {
    const C = useStyles()
    const [apps, setApps] = useState([])

    const handleMouseMove = (id) => {
        _mouseMove(id)
    }

    const makeApp = (id) => {
        onDubClick(id, date)
    }    

    useEffect(() =>{
        const getApps = async () => {
            if(field == 'Tennis' || field =='Tenis') {
                var serverApps = await getTennisCourts({date})
                // console.log(serverApps)
                setApps(serverApps)

            } else if(field == 'OutDoor' || field =='Fotbal') {
                const serverApps = await getAppsByDateandField({date: date,field: 'OutDoor'})
                // console.log(serverApps)
                setApps(serverApps)
            
            } else if(field == 'Sala Polivalenta' || field =='Hall') {
                const serverApps = await getAppsByDateandField({date:date,field: 'Hall'})
                setApps(serverApps)
            
                
            } else if(field == 'Aerobic') {
                const serverApps = await getAppsByDateandField({date,field})
                setApps(serverApps)
                
            } 
        }
        getApps()
    }, [date, field])


    const generateLine = () => {
        var ret = []
        var i


        if(field ==  'Tennis'|| field == 'Tenis') { 
            ret.push([])
            ret.push([])
            ret.push([])                
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
                        const hilit = i==rowLight?'lit':''
                        ret[crtField].push(
                            <Paper 
                                elevation={2} 
                                onDoubleClick = {()=>makeApp(auxi)}
                                onClick={()=>handleMouseMove(auxi)}
                                className={hilit}
                                >
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
                    const auxi = i
                    const hilit = i==rowLight?'solid ':''
                    if(hilit =='lit')console.log('lit')
                    ret.push(
                        <Paper 
                            elevation={2} 
                            onDoubleClick = {()=>makeApp(auxi)}
                            onClick={()=>handleMouseMove(auxi)}
                            style={{border: `4px ${hilit}#FFB231`, 
                                    margin: 0}}
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

const useStyles = makeStyles({
    lit:{
        border: 5,
        borderColor: 'yellow',
        background: 'red',
    },
});


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
