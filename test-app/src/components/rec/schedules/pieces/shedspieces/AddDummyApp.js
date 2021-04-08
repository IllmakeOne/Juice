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

import { addAppointment } from '../../../../DBconn'
import { GridColumn, GridRow } from 'emotion-flex-grid'
import { MyContext } from '../../../../../App'
import ShowAppointment from '../../../../../containers/appointments/ShowAppointment'
import PickField from '../PickField'
import PickDate from '../PickDate'
import PickClinetandNr from '../PickClinetandNr'
import OrangePaper from '../../../../../containers/papers/OrangePaper'

function AddDummyApp({open,closeDummyAppDialog, info}) {
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
        setCrtApp({...crtApp,field: info.field, time: info.time, date:info.date})
        setDate(info.date)
    }, [])

    useEffect(()=>{console.log(date)},[date])
    useEffect(()=>{console.log(crtApp)},[crtApp])
    
    const changeField = (newfield) => {
        // console.log(newfield)
        setCrtApp({...crtApp, field: newfield})
    }

    const changeAppStatus = e => {
        console.log(e.target.value)
        setCrtApp({...crtApp, status: e.target.value})
    }

    const changeAppTime = e =>{
        console.log(e.target.value)
        setCrtApp({...crtApp, time: tymes.indexOf(e.target.value)})
    }


    const handleClose = () => {
        closeDummyAppDialog()
    }

    const makeAppointment = () => {
        closeDummyAppDialog()
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
                {PickTimeRow()}
                {PickDurationRow()}
                <PickClinetandNr />
            </div>
        )
    }

    const PickHourRow = () => {
        return(
            <GridRow>
                <GridColumn p='m' align='center' width={5}>
                    <h3>{decLg('Appointment date: ','Data Rezervarii:')}</h3>
                </GridColumn>
                <GridColumn>
                    <PickDate date={info.date} changeDate={topSetDate} />
                </GridColumn>
            </GridRow>
        )
    }

    const PickAppTypeRow = () => {
        return(
            <GridRow>
                <GridColumn p='m' align='center' width={5}>
                    <h3>{decLg('Appointment Type: ','Tip Rezervare:')}</h3>
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
                <GridColumn p='m' align='center' width={5}>
                    <h3>{decLg('Pick Field: ','Alege Teren:')}</h3>
                </GridColumn>
                <GridColumn m='m'>
                    <PickField changeField={changeField} field={info.field} />
                </GridColumn>
            </GridRow>
        )
    }

    const PickTimeRow = () => {
        return(
            <GridRow>
                <GridColumn p='m'  align='center' width={5}>
                    <h3>{decLg('Pick Time: ','Alege Ora:')}</h3>
                </GridColumn>
                <GridColumn >
                    <FormControl align='center'>
                        <InputLabel >{decLg('Apointment Start','Start Rezervare')}</InputLabel>
                        <Select
                            className={C.inputbox}
                            value={tymes[crtApp.time]}
                            onChange={changeAppTime}
                            >
                                {/* {console.log(tymes)} */}
                                {tymes.map((el)=>{
                                    return(
                                        <MenuItem value={el}>{el}</MenuItem>
                                    )
                                })}
                        </Select>
                    </FormControl>
                </GridColumn>
            </GridRow>
        )
    }

    const PickDurationRow = () => {
        return(
            <GridRow>
                <GridColumn p='m' align='center' width={5}>
                    <h3>{decLg('Pick appointment duration:','Alege durata rezervarii:')}</h3>
                    <h5>{decLg('\n(in halves of hour) ','\n(in jumatati de ora')}</h5>
                </GridColumn>
                <GridColumn m='m'>
                    <Input 
                            type='number'
                            inputProps={{min: 1, style: { textAlign: 'center' }}}
                            value={crtApp.duration}
                            error={crtApp.duration < 1 || crtApp.duration>36 }
                            onChange={(e) => setCrtApp({...crtApp, duration: e.currentTarget.value})}
                        />
                </GridColumn>
            </GridRow>
        )
    }



    return (
        <Dialog open={open} 
                onClose={handleClose}
                maxWidth='lg' 
                fullWidth={true}
                >
            <form onSubmit={makeAppointment}>
            {/* <DialogTitle id="form-dialog-title">
                <h2 style={{color:'#00539CFF'}}>
                    {decLg('Make An Appointment','Creeaza o Rezervare')}
                </h2>
            </DialogTitle> */}
            <DialogContent>
                {/* <DialogContentText>
                    Some Fields are obligatory, some not
                </DialogContentText> */}
                <GridRow>
                    <GridColumn>
                        <h2 style={{color:'#00539CFF',fontSize:32}}>
                            {decLg('Make an Awaitting Appointment','Creeaza o Rezervare in asteptare')}
                        </h2><br/>
                        <OrangePaper>
                            {DialogContenence()}
                        </OrangePaper>
                    </GridColumn>
                    <GridColumn>
                        <h2 style={{color:'#00539CFF', fontSize:32}}>
                            {decLg('Review Appointment','Verifica Rezervare')}
                        </h2><br/>
                        <OrangePaper>
                            <ShowAppointment />
                        </OrangePaper>
                    </GridColumn>
                </GridRow>
                
            </DialogContent>
            <DialogActions>
                <Button style ={{textTransform: 'none', background:'rgb(255, 185, 150)'}} onClick={handleClose} color="secondary" variant="contained">
                        <h3>
                            {decLg('Cancel', 'Anuleaza')}
                        </h3>
                </Button>
                <Button  style ={{textTransform: 'none', background: '#7cfc9a'}} color="primary" variant="outlined"  onClick={makeAppointment}>{/*type="submit" */}
                        <h3>
                            {decLg('Create Temporary Appointmen', 'Creaza rezerare provizorie')}
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
    timeselectopt:{
        textAlign: 'center'
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
    time: 0,
}

const tymes = [//'Times',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',        
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',        
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
        '00:00',
        '00:30',
        '01:00',
        '01:30',
    ]


export default AddDummyApp
