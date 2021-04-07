import {  useState, useContext, useEffect } from 'react'

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Input from '@material-ui/core/Input'
import Switch from '@material-ui/core/Switch'


import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

import { addAppointment } from '../../../DBconn'
import { MyContext } from '../../../../App'
import { GridColumn, GridRow } from 'emotion-flex-grid'
import PickDate from './PickDate';
import PickField from './PickField'


function AddApp({open,closeAppDialog, info}) {
    const C = useStyles()    
    const cx = useContext(MyContext)
    const decLg = (en, ro) => {
        if(cx.lg=='en')
            return en
        else
            return ro
    }

    const [date, setDate] = useState(new Date)
    const topSetDate = (date)=>{
        setDate(date)
    }

    
    const [crtApp, setCrtApp]= useState(defaultApp)
    useEffect(() => {
        setCrtApp({...crtApp,field: info.field, time: info.time})
        setDate(info.date)
    }, [])
    
    const changeField = (newfield) => {
        // console.log(newfield)
        setCrtApp({...crtApp, field: newfield})
    }

    const changeAppStatus = e => {
        console.log(e.target.value)
        setCrtApp({...crtApp, status: e.target.value})
    }


    const handleClose = () => {
        closeAppDialog()
    }

    const makeAppointment = () => {
        closeAppDialog()
        // if(checkOut(crtApp) == true){
        //     addAppointment(crtApp)
        //     setCrtApp(defaultApp)
        // }
    }

    const DialogContenence = () => {
        return(
            <div>
                {PickHourRow()}
                {PickAppTypeRow()}
                {PickFieldRow()}
            </div>
        )
    }

    const PickHourRow = () => {
        return(
            <GridRow>
                <GridColumn p='m'>
                    <h5>{decLg('Appointment date: ','Data Rezervarii:')}</h5>
                </GridColumn>
                <GridColumn>
                    <PickDate date={date} changeDate={topSetDate} />
                </GridColumn>
            </GridRow>
        )
    }

    const PickAppTypeRow = () => {
        return(
            <GridRow>
                <GridColumn p='m'>
                    <h5>{decLg('Appointment Type: ','Tip Rezervare:')}</h5>
                </GridColumn>
                <GridColumn>
                    <FormControl >
                        <InputLabel >{decLg('Appointment Type','Tip Rezervare')}</InputLabel>
                        <Select
                        className={C.inputbox}
                            value={crtApp.status}
                            onChange={changeAppStatus}
                            >
                                <MenuItem value='oc'>Ocasional</MenuItem>
                                <MenuItem value='sub'>{decLg('Subscription','Abonament')}</MenuItem>
                                <MenuItem value='corp'>{decLg('Corporation','Firma')}</MenuItem>
                                <MenuItem value='cw'>{decLg('Client Waiting','Client in asteptare')}</MenuItem>
                                <MenuItem value='acc'>{decLg('Awaiting client confirmation ','Astepata cornfirmare client')}</MenuItem>
                                <MenuItem value='tr'>{decLg('Trainer','Antrenor')}</MenuItem>
                        </Select>
                    </FormControl>
                </GridColumn>
            </GridRow>
        )
    }

    const PickFieldRow = () => {
        return(
            <GridRow>
                <GridColumn p='m'>
                    <h5>{decLg('Pick Field: ','Alege Teren:')}</h5>
                </GridColumn>
                <GridColumn>
                    <PickField changeField={changeField} field={info.field} />
                </GridColumn>
            </GridRow>
        )
    }


    return (
        <Dialog open={open} 
                onClose={handleClose}
                width='lg' 
                fullWidth={true}
                >
            <form onSubmit={makeAppointment}>
            <DialogTitle id="form-dialog-title">
                <h2 style={{color:'#00539CFF'}}>
                    {decLg('Make An Appointment','Creeaza o Rezervare')}
                </h2>
            </DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                    Some Fields are obligatory, some not
                </DialogContentText> */}
                {DialogContenence()}
            </DialogContent>
            <DialogActions>
                <Button style ={{textTransform: 'none', background:'rgb(255, 185, 150)'}} onClick={handleClose} color="secondary" variant="contained">
                        <h3>
                            {decLg('Cancel', 'Anuleaza')}
                        </h3>
                </Button>
                <Button  style ={{textTransform: 'none'}} color="primary" variant="outlined"  onClick={makeAppointment}>{/*type="submit" */}
                        <h3>
                            {decLg('Create Appointmen', 'Creaza rezerare')}
                        </h3>
                </Button>
            </DialogActions>
            </form>
        </Dialog>
    )
}

const useStyles = makeStyles({
    infolilbox:{
        width: 200,

    },

    inputbox:{
        width:253,
        textAlign: 'center',
    }
  })

  const defaultApp = {
    id: 0,
    name: '',
    field: '',
    date: '' ,
    status: ``,
    duration: 0,
}

export default AddApp


