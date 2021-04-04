import {  useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'


import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

import { addAppointment } from '../../../DBconn'

function AddApp({open, info}) {

    const [crtApp, setCrtApp]= useState(defaultApp)

    const handleClose = () => {

    }

    const DialogContenence = () => {

    }


    const checkOut = (app) =>{
        if(app.id!= defaultApp.id &&
            app.name != defaultApp.name &&
            app.date != defaultApp.date &&
            app.status != defaultApp.status &&
            app.duration != defaultApp.duration &&
            app.field != defaultApp.field &&
            app.date != defaultApp.date)
            return true
        else 
            return false
    }

    const makeAppointment = () => {
        if(checkOut(crtApp) == true){
            addAppointment(crtApp)
            setCrtApp(defaultApp)
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" 
                maxWidth='md?????????????'>
            <form onSubmit={makeAppointment}>
            <DialogTitle id="form-dialog-title">Change Number of Product</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Change the amount of an item in cart
                </DialogContentText>
                {DialogContenence()}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button color="primary" onClick={makeAppointment}>{/*type="submit" */}
                     Crete App
                </Button>
            </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddApp


const defaultApp = {
    id: 0,
    name: '',
    field: '',
    date: '' ,
    status: '',
    duration: 0,
}