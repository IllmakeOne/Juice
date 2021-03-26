import React from 'react'
import {  Paper } from '@material-ui/core'

function FullCell({app}) {
    console.log(app)
    const clsname= 'cell' + app.status
    return ( 
            <div className={`${clsname} cell `} 
            // onMouseEnter={()=>onHoover()} 
            // onClick={()=>abprt(el.id)}
            >
               {app.name} 
            </div>
    )
}

export default FullCell
