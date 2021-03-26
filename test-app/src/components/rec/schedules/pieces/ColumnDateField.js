import {useEffect, useState} from 'react'

import { getAppsByDateandField}  from '../../../DBconn'

function ColumnDateField({date, field}) {

    const [apps, setApps] = useState([])

    useEffect(() =>{
        const getApps = async () => {
            const serverApps = await getAppsByDateandField(date,field)
            setApps(serverApps)
        }
        getApps()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default ColumnDateField
