import { useState } from 'react'


import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

function AddApp() {

    const [crtApp, setCrtApp]= useState(
        {
            id: 0,
            name: '',
            field: '',
            date: '' ,
            status: '',
            duration: 0,
        }
    )
    return (
        <div><br/><br/><br/>
            <h1> aaaaaaaaaaaaa </h1>
        </div>
    )
}

export default AddApp
