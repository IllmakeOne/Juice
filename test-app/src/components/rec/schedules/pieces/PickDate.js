import React from 'react'

import {KeyboardDatePicker,
    MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function PickDate({date, changeDate}) {

    const auxCangeDate = (date) =>{
        changeDate(date)
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}> 
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                id="date-picker-inline"
                label="Date picker inline"
                value={date}
                onChange={auxCangeDate}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
        </MuiPickersUtilsProvider>
    )
}

export default PickDate
