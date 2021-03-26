import React from 'react'

import {  Paper } from '@material-ui/core'

function EmptyCell() {
    return (
        <Paper className={`${'emptycell'} `} 
        // onMouseEnter={()=>onHoover()}
        // onClick={()=>abprt(aux)}
        >
            .     .     .
        </Paper>
    )
}

export default EmptyCell
