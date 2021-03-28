import {useEffect, useState} from 'react'

import { getAppsByDateandField }  from '../../../DBconn'

      
import FullCell from '../cells/FullCell'    
import EmptyCell from '../cells/EmptyCell'
import { Paper } from '@material-ui/core'




const dayLenght = 38

function ColumnDateField({date, field, _mouseMove}) {


    const [apps, setApps] = useState([])

    const handleMouseMove = (id) => {
        _mouseMove(id)
    }

    useEffect(() =>{
        console.log(field)
        const getApps = async () => {
            if(field == 'Tennis') {
                var serverApps = []
                const t1 = await getAppsByDateandField({date,field: 'T 1'})
                const t2 = await getAppsByDateandField({date,field: 'T 2'})
                const t3 = await getAppsByDateandField({date,field: 'T 3'})

                serverApps.push(t1)
                serverApps.push(t2)
                serverApps.push(t3)

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
        ret.push()
        var i
        for ( i = 0;i < dayLenght ; i++){
            const aux = apps.filter(el => el.id==i)
            if (aux.length != 0){
                const el = aux[0]
                
                i+= el.duration - 1

                const height = el.duration * 25
                ret.push(
                    <Paper elevation={3} style={{height:height }} onMouseMove={()=>handleMouseMove(el.id)}>
                        <FullCell app={el}/>
                    </Paper>)

            } else {//if there is nothing scheudle for this hour
                const aux = i
                ret.push(
                    <Paper elevation={2} onMouseMove={()=>handleMouseMove(aux)}>
                                        {/* // height: 25,
                                         textAlign: 'center',
                                         background: auxcolor}}>  */}
                        <EmptyCell i={i}/> 
                    </Paper>
                    )
            }
        }
        return ret
    }
    return (
        <div>
            {generateLine()}
        </div>
    )
}

export default ColumnDateField
