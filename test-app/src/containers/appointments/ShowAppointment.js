import React from 'react'

function ShowAppointment({app}) {
    return (
        <div>
        {app.date}<br/>
            {app.status}<br/>
        {app.field}<br/>
            {app.time}<br/>
            {app.duration}<br/>
            {app.name}<br/>
            {app.phone}<br/>
        </div>
    )
}

export default ShowAppointment
