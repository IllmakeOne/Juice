import React, {  Children, useState } from 'react'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

function SubHBox({sub}) {
    return (
        <div>
            <h3>{sub.type}</h3>
            <h3>{sub.left}</h3>
            <h3>{sub.start}</h3>
            <h3>{sub.end}</h3>
        </div>
    )
}

export default SubHBox
