import React from 'react'
import { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui'
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { DatePicker } from '@material-ui/pickers'
import { Button } from '@material-ui/core'




const schedulerData = [
  { startDate: '2021-03-03T09:45', endDate: '2021-03-03T11:00', title: 'Meeting',today: false, draggable:true},
  { startDate: '2021-03-02T12:00', endDate: '2021-03-02T13:30', title: 'Go to a gym', today: false,admin: 'Radu'},
]

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

const todayDate = () => {
    const today= new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return yyyy + '-'+ mm + '-' + dd

}

const OurScheduler = ()=> {

    const today= todayDate()
    
    const classes = useStyles();
    
    const [open, setOpen] = useState(false); 

    const [dialogValue, setDialogValue] = useState({
        date: 0,
        start: '',
        end: '',
        title: '',
        person: 'Person',
        phone: '07',
        admin: 'Radu',
        comment: 'Comment',
        area: 'Tennis'
      });

    
      useEffect(() =>{
        console.log(dialogValue)
    
    // setTimeout(_exportPdf(),10000)
    }, [dialogValue])

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        console.log(today)
        setOpen(true)
    }

    const handleDialogSubmit = () => {
        // console.log('submitted')
    }

    const handleAppChange = () => {
        // console.log('handle app cahnge')
    }

    const Appointment = ({
        children, style, ...restProps
      }) => (
        <Appointments.Appointment
          {...restProps}
          style={{
            ...style,
            backgroundColor: 'red',
            borderRadius: '8px',
          }}
        >
            

          GAYYY
          {children}
        </Appointments.Appointment>
      );


    const commitChanges = ({ added, changed, deleted }) => {
        this.setState((state) => {
          let { data } = state;
          if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
            data = [...data, { id: startingAddedId, ...added }];
          }
          if (changed) {
            data = data.map(appointment => (
              changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          }
          if (deleted !== undefined) {
            data = data.filter(appointment => appointment.id !== deleted);
          }
          return { data };
        });
      }

    return (
        <div>
            <Button 
                className='cart_button'
                variant="contained" 
                color="primary"
                // onClick ={()=>removeItem(item.id)}
                onClick={()=>handleOpen()} 
                >
                Add Reservation
            </Button>
        
            <Paper>
                <Scheduler data={schedulerData} height={660}>

                {/* <ViewState
                    currentDate={today}
                />

                <EditingState
                    onCommitChanges={commitChanges}
                /> */}

                
                {/* <ConfirmationDialog />
                <IntegratedEditing /> */}
                <WeekView startDayHour={7} endDayHour={24} firstDayOfWeek={2}/>
                <Appointments 
                    appointmentComponent={Appointment} 
                />{/*  onClick={()=>handleOpen()} draggable={true} */}
                
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                />
                <AppointmentForm />
                </Scheduler>
            </Paper>


            <React.Fragment >
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" 
                        maxWidth="lg">
                    <form onSubmit={handleDialogSubmit}>
                    <DialogTitle id="form-dialog-title">Add New Reservation</DialogTitle>
                    <DialogContent>

                        <DialogContentText>
                            {/**selects the admin who made the reservation, hard coded */}
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={dialogValue.admin}
                                onChange={(event) => setDialogValue({...dialogValue, admin: event.target.value})}
                                >
                                <MenuItem value={'Radu'}>Radu</MenuItem>
                                <MenuItem value={'Sergiu'}>Sergiu</MenuItem>
                                <MenuItem value={'Andrei'}>Andrei</MenuItem>
                                <MenuItem value={'Robi'}>Robi</MenuItem>
                                </Select>
                            </FormControl>
                        </DialogContentText>


                        <TextField
                            margin="dense"
                            id="amount"
                            value={dialogValue.amount}
                            onChange={(event) => setDialogValue({ ...dialogValue, amount: event.target.value })}
                            label="No. of Items"
                            type="number"
                        />

                         {/**Choses date */}
                         <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue={today}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={(event) => setDialogValue({ ...dialogValue, date: event.target.value })}
                            />
                        </form>
                        <br/> 
                        {/** Time picker START */}
                        <form className={classes.container} noValidate>
                            <TextField
                                id="times"
                                label="Reservation Start Time"
                                type="time"
                                defaultValue="12:00"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                // step: 300, // 5 min
                                step: 900, // 5 min
                                }}
                                onChange={(event) => setDialogValue({ ...dialogValue, start: event.target.value })}
                            />
                        </form>
                        <br/>
                        {/** Time picker END */}
                        <form className={classes.container} noValidate>
                            <TextField
                                id="timee"
                                label="Reservation End Time"
                                type="time"
                                defaultValue="12:00"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                // step: 300, // 5 min
                                step: 900, // 5 min`x
                                }}
                                onChange={(event) => setDialogValue({ ...dialogValue, end: event.target.value })}
                            />
                        </form>
                        
                        <br/>
                        <TextField
                            autoFocus
                            // margin="dense"
                            id="person"
                            value={dialogValue.person}
                            label="Person asking for Res"
                            type="text"
                            size='medium'
                            onChange={(event) => setDialogValue({ ...dialogValue, phone: event.target.value })}
                        />

                        <br/>
                        <TextField
                            autoFocus
                            // margin="dense"
                            id="phone"
                            value={dialogValue.phone}
                            label="phone"
                            type="text"
                            size='medium'
                            onChange={(event) => setDialogValue({ ...dialogValue, phone: event.target.value })}
                        />
                        <br/>
                        <TextField
                            autoFocus
                            // margin="dense"
                            id="comment"
                            value={dialogValue.comment}
                            label="Comment"
                            type="text"
                            size='medium'
                            onChange={(event) => setDialogValue({ ...dialogValue, comment: event.target.value })}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" onClick={handleDialogSubmit}>{/*type="submit" */}
                                Add
                        </Button>
                    </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>

        </div>
    )
}

export default OurScheduler
