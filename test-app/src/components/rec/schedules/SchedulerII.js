import React, { useState, useCallback } from 'react'

// import { ViewState, 
//     EditingState, 
//     IntegratedEditing, 
//     Resource,
//     // DayView, 
//     GroupingState, 
//     // GroupingPanel, 
//     // DateNavigator, 
//     // ViewSwitcher, 
//     // TodayButton, 
//     IntegratedGrouping,
//     // Resources,
//     // AppointCont,
//     // Toolbar,
//     // DragDropProvider,

    
//     // Scheduler,
//     // WeekView,
//     // Appointments,
//     // AppointmentForm,
//     // AppointmentTooltip,

// } from '@devexpress/dx-react-scheduler'

// import Scheduler, { Resource, View } from 'devextreme-react/scheduler'
// import Scheduler, { Resource } from 'devextreme-react/scheduler';


import Paper from '@material-ui/core/Paper'

import { amber, blue, deepOrange, green, pink, red, yellow } from '@material-ui/core/colors'


import {
    ViewState, GroupingState, IntegratedGrouping, IntegratedEditing, EditingState,
  } from '@devexpress/dx-react-scheduler';
  import {
    Scheduler,
    Resources,
    Appointments,
    AppointmentTooltip,
    GroupingPanel,
    DayView,
    WeekView,
    DragDropProvider,
    AppointmentForm,
    Toolbar,
    ViewSwitcher,
    TodayButton
  } from '@devexpress/dx-react-scheduler-material-ui';


const app = [
    {"id": "1", "startDate": "2021-03-03T09:45", "endDate": "2021-03-03T11:00", "title": "Meeting", 
         "admin":"Radu", "area": "Tennis 1", "person": "Mircov","phone":"0720440760"},
     { "id": "2", "startDate": "2021-03-04T17:00", "endDate": "2021-03-04T18:30", "title": "Go to a gym", 
    "admin":"Robi", "area": "Tennis 1", "person": "Mihut","phone":"0720440763"},
  { "id": "3", "startDate": "2021-03-02T12:00", "endDate": "2021-03-02T13:30", "title": "Go to a gym", 
    "admin":"Sergiu", "area": "Tennis 1", "person": "Popovics","phone":"0720440761"},
    
  { "id": "4", "startDate": "2021-03-03T12:00", "endDate": "2021-03-03T13:30", "title": "Go to a gym", 
    "admin":"Sergiu", "area": "Tennis 2", "person": "Popovics","phone":"0720440761"},
  { "id": "5", "startDate": "2021-03-02T12:00", "endDate": "2021-03-02T13:30", "title": "Go to a gym", 
    "admin":"Sergiu", "area": "Tennis 2", "person": "Popovics","phone":"0720440761"},


  { "id": "6", "startDate": "2021-03-01T12:00", "endDate": "2021-03-01T13:30", "title": "Go to a gym", 
    "admin":"Sergiu", "area": "Tennis 3", "person": "Popovics","phone":"0720440761"},
  { "id": "7", "startDate": "2021-03-02T12:00", "endDate": "2021-03-02T13:30", "title": "Go to a gym", 
    "admin":"Andrei", "area": "Tennis 3", "person": "Iudean","phone":"0720440762"},
    
  { "id": "8", "startDate": "2021-03-04T12:00", "endDate": "2021-03-04T13:30", "title": "Go to a gym", 
    "admin":"Radu", "area": "OutDoor", "person": "Crenguta","phone":"0720440764","comment":"comment"}
]

const appointment = [
    {
        id: 1,
        area: 'Tennis 1',
        employee: 'Radu ',
        // startDate: '2021-03-05T09:45',
        // endDate: '2021-03-05T11:00',
        startDate:  new Date(2021, 2, 5, 12, 0, 0),
        endDate:  new Date(2021, 2, 5, 13, 30, 0),
        title: 'title 1'
    },
    {
        id: 2,
        area: 'Tennis 2',
        employee: 'Radu ',
        startDate:  new Date(2021, 2, 5, 13, 0, 0),
        endDate:  new Date(2021, 2, 5, 14, 30, 0),
        title: 'title 2'
    },
    {
        id: 3,
        area: 'Tennis 2',
        employee: 'Sergiu',
        startDate: '2021-03-05T12:00',
        endDate: '2021-03-05T11:00',
        title: 'title 3'
    }
    
]

const resources = [
    {
        id: 0,
        fieldName: 'area',
        title: 'Sports Area',
        // allowMultiple: true,
        instances: [
            {id: '1', text: 'Tennis 1', color: amber},
            {id: '2', text: 'Tennis 2', color: pink},
            {id: '3', text: 'Tennis 3', color: deepOrange}
        ]
    },
    // {
    //     id: 1,
    //     fieldName: 'aerobic',
    //     title: 'Aerobic',
    //     // allowMultiple: true,
    //     instances: [
    //         {id: '1', text: 'Aerobic 1', color: amber},
    //         {id: '2', text: 'Aerobic 2', color: pink},
    //         {id: '3', text: 'Aerobic 3', color: deepOrange}
    //     ]
    // },
    {
        id: 3,
        fieldName: 'employee',
        title: 'Empolyee',
        // allowMultiple: true,
        instances: [
            {id: '1', text: 'Radu', color: amber},
            {id: '2', text: 'Sergiu', color: pink},
            // {id: '3', text: 'Andrei', color: deepOrange}
        ]
    }
]

const grouping = [{
    resourceName: 'area'
    }]
    // {resourceName: 'emplyeeId'}


const groupByDate = (viewName) => {
    if(viewName === 'day') return true
    if(viewName === 'twoDay') return true
    if(viewName === 'sevenDay') return true
    return false
}

const groupOrientation = (viewName) => {
    if(viewName === 'month') return 'Vertical'
    return 'Horizontal'
}


// const styles = theme => ({
//     container: {
//       display: 'flex',
//       marginBottom: theme.spacing(2),
//       justifyContent: 'flex-end',
//     },
//     text: {
//       ...theme.typography.h6,
//       marginRight: theme.spacing(2),
//     },
//   });
  
//   const ResourceSwitcher = withStyles(styles, { name: 'ResourceSwitcher' })(
//     ({
//       mainResourceName, onChange, classes, resources,
//     }) => (
//       <div className={classes.container}>
//         <div className={classes.text}>
//           Main resource name:
//         </div>
//         <Select
//           value={mainResourceName}
//           onChange={e => onChange(e.target.value)}
//         >
//           {resources.map(resource => (
//             <MenuItem key={resource.fieldName} value={resource.fieldName}>
//               {resource.title}
//             </MenuItem>
//           ))}
//         </Select>
//       </div>
//     ),
//   );


function SchedulerII({myapps}) {

    const [data, setData] = useState(app)
    const [crtView, setCrtView] = useState('week')
    const [mainResourceName, setMainResource] = useState('area')
    console.log(appointment)
    // cosnt commitChanges = useCallback()
    // const changeMainResource= (mainResourceName)=>{
    //     this.setMainResource( mainResourceName );
    //   }

    return (
        <React.Fragment>
            {/* <ResourceSwitcher
            resources={resources}
            mainResourceName={mainResourceName}
            onChange={changeMainResource}
            /> */}
            <Paper>

            <Scheduler
                data={appointment}
                >
            <ViewState
                defaultCurrentDate="2017-05-28"
            />
            <EditingState
                // onCommitChanges={this.commitChanges}
            />
            <GroupingState
                grouping={grouping}
                groupByDate = {()=>true}
            />

            <DayView
                name='twoday' 
                displayName = 'TwoDay View'
                startDayHour={9}
                endDayHour={15}
                intervalCount={2}
            />

            {/* <ViewState 
                    defaultCurrentViewName='week'
                    currentViewName={crtView}
                    onCurrentViewNameChange={setCrtView}
                    /> */}
            
            <WeekView
                name='week' 
                displayName = 'Week View'
                startDayHour={7} 
                endDayHour={24} />
            {/*<DayView name='day' startDayHour={7.5} endDayHour={24}/> */}
            <Appointments />
            <Resources
                data={resources}
                mainResourceName="area"
            />

            <IntegratedGrouping />
            <IntegratedEditing />

            <AppointmentTooltip showOpenButton />
            <AppointmentForm />
            <GroupingPanel />
            <DragDropProvider />

            <Toolbar />
            {/* <DateNavigator /> */}
            <ViewSwitcher />
            <TodayButton />

            </Scheduler>


                {/*<Scheduler data={[]} height={700} 
                    // appointmentTooltipComponent={AppointmentTooltip}
                    // onAppointmentClick={onAppointmentClick}
                    // onAppointmentFormOpening={onAppointmentFormOpening}
                    
                    // resourceCellRender={renderResourceCell}
                    >
                {
                    console.log('resources'),
                    console.log(resources),
                    console.log('app'),
                    console.log(app),
                    console.log('goupding'),
                    console.log(grouping)
                }
                <ViewState 
                    defaultCurrentViewName='week'
                    currentViewName={crtView}
                    onCurrentViewNameChange={setCrtView}
                    />

                <GroupingState
                    grouping={grouping}
                    defaultGrouping={grouping}
                    groupByDate = {groupByDate}
                    // groupOrientation={()=>'Horizontal'}
                    groupOrientation= {groupOrientation}
                    />
                {/* <IntegratedGrouping />
                <IntegratedEditing /> 

                <GroupingPanel />
                <Appointments />

                <EditingState
                    // onCommitChanges={commitChanges}
                    />


                <Resources data ={resources} />

                <WeekView name = 'week' startDayHour={7} endDayHour={24} />
                <DayView name='day' startDayHour={7.5} endDayHour={24}/>
                <DayView name='sevenDay' startDayHour={7.5} endDayHour={24}
                        intervalCount = {0,7} displayName='7 days a week' />

                <Appointments 
                    // appointmentComponent={Appointment}
                
                    // appointmentContentComponent={AppointCont}
                />{/*  onClick={()=>handleOpen()} draggable={true} 
                
                <AppointmentTooltip
                    showCloseButton
                    showOpenButton
                />
                
                {/* <AppointmentForm />

                <Toolbar />
                <DateNavigator />
                <ViewSwitcher />
                <TodayButton />
                <DragDropProvider /> 

                </Scheduler> */}
            </Paper>
        
            </React.Fragment>
    )
}

export default SchedulerII





// import{ IntegratedGrouping,Resource } from 'devextreme-react/scheduler'

// import TextField from '@material-ui/core/TextField'
// import Dialog from '@material-ui/core/Dialog'
// import DialogTitle from '@material-ui/core/DialogTitle'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
// import DialogActions from '@material-ui/core/DialogActions'
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Autocomplete from '@material-ui/lab/Autocomplete'


// import { DatePicker } from '@material-ui/pickers'
// import { Button, Toolbar } from '@material-ui/core'

// import { FIELDS,area } from './MainSche'
// import { amber, deepOrange, pink, red, yellow } from '@material-ui/core/colors'



// const useStyles = makeStyles(() => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       width: 200,
//     },
//     schedule: {
//       width: 200,
//     },
//   }));


// const todayDate = () => {
//     const today= new Date()
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     return yyyy + '-'+ mm + '-' + dd

// }

//   //---------------------Start---------------------Start----------------------------Start-----------------
// export const OurScheduler = ({apps, upApp})=> {

//     const cls1 = css`
//         background: hotpink;
//     `
//     // font-size: 18px;
//     const cls2 = css`
//         background: #4290f5;
//     `

//     const cls3 = css`
//         background: orange;
//     `

//     const today= todayDate()

//     const defaultApp = {
//         date: today,
//         start: '12:00',
//         end: '13:00',
//         title: 'Appointment',
//         person: 'Person',
//         phone: '07',
//         admin: 'Radu',
//         comment: 'Comment',
//         area: 'Tennis 1'

//     }

//     const resources = [
//         {
//             id: 0,
//             fieldName: 'tennis',
//             title: 'Tennis',
//             allowMultiple: true,
//             instances: [
//                 {id: '1', text: 'Tennis 1', color: amber},
//                 {id: '2', text: 'Tennis 2', color: pink},
//                 {id: '3', text: 'Tennis 3', color: deepOrange}
//             ]
//         },
//         {
//             id: 1,
//             fieldName: 'aerobic',
//             title: 'Aerobic',
//             allowMultiple: true,
//             instances: [
//                 {id: '1', text: 'Aerobic 1', color: amber},
//                 {id: '2', text: 'Aerobic 2', color: pink},
//                 {id: '3', text: 'Aerobic 3', color: deepOrange}
//             ]
//         }
//     ]
    
//     const styleclass = useStyles();
    
//     const [open, setOpen] = useState(false); 

//     const [myapps, setMyapps] = useState(apps); 
    
//     //open state for the seonc dialog
//     // const [ouvert, setOuvert] = useState(false); 

//     const [dialogValue, setDialogValue] = useState({
//         date: today,
//         start: '12:00',
//         end: '13:00',
//         title: '',
//         person: 'Person',
//         phone: '07',
//         admin: 'Radu',
//         comment: 'Comment',
//         area: 'Tennis'
//       });

    
//       useEffect(() =>{
//         // console.log(dialogValue) 
    
//     // setTimeout(_exportPdf(),10000)
//     }, [dialogValue])

//     const handleClose = () => {
//         setOpen(false)
//     }

//     const handleOpen = () => {
//         setOpen(true)
//     }

//     const handleDialogSubmit = () => {
//         if(dialogValue.date == 0){
//             alert('Please select a date')
//         }
//         if(dialogValue.end < dialogValue.start){
//             alert('Please select correct end time \n Start time has to be earlier than end time')
//         }
//         if(dialogValue.person == 'Person'){
//             alert('Please enter valid name')
//         }
//         if(dialogValue.phone.size < 10){
//             alert('Please enter valid phone number')
//         }
//         // console.log(dialogValue)
//         const upvalue= {
//             startDate: dialogValue.date+'T'+dialogValue.start,
//             endDate: dialogValue.date+'T'+dialogValue.end,
//             title: dialogValue.title,
//             admin: dialogValue.admin,
//             area: dialogValue.area,
//             phone: dialogValue.phone,
//             person: dialogValue.person
//         }

//         upApp(upvalue)
//         // myapps.push(upvalue)
//         // setMyapps(myapps)
//         handleClose()
//         setDialogValue(defaultApp)
//     }

//     const handleAppChange = () => {
//         // console.log('handle app cahnge')
//     } 

//     /**
//      * used to check if the given two times givesn as string
//      * are corret, meaning the frist one is earlier than the second
//      */
//     const checkCorrectTime =( time1, time2) =>{
//     }

//     const openApp = (id) => {
//         console.log(id)
//     }

//     const Appointment = ({
//          children, style, data, ...restProps
//       }) => (
//         <Appointments.Appointment
//           {...restProps}
          
            
//           className= {cx(
//             { [cls1]: data.area == 'Tennis 1' },
//             { [cls2]: data.area == 'Tennis 2' },
//             { [cls3]: data.area == 'Tennis 3' }
//           )}
//             style={{
//                 ...style,
//                 // backgroundColor: '#FFC107',
//                 borderRadius: '8px',
//             }}
//             // onClick={()=>openApp(data.id)}
//             // className={cx(cls1,cls2)}
//         >   
            
//           {/* {console.log(data.id)} */}
//           <h4 font-wegiht = 'bold'>{data.person}</h4>
//           <h4 font-wegiht = 'bold'>{data.phone}</h4>
//           <h4 font-wegiht = 'bold'>{data.admin}</h4>
//           {children}
//         </Appointments.Appointment>
//       )
     
     
//     const handleOpenTime = () => {

//     }

      
//     useEffect(() => { 
//         setMyapps(apps) }, [apps]);

//     const onAppointmentClick = () =>{
//         console.log("apppp")
//     }

//     const onAppointmentFormOpening = () =>{
        
//         console.log("apppp")
//         handleOpen()
//     }

//     const renderResourceCell = (model) => {
//         console.log("apppp")
//         return (
//             <i style={{color: "blue"}}>{model.data.text}</i>
//         );
//     }

//     return (
//         <div>
//             <Button 
//                 className='cart_button'
//                 variant="contained" 
//                 color="primary"
//                 // onClick ={()=>removeItem(item.id)}
//                 onClick={()=>handleOpen()} 
//                 >
//                 Add Reservation
//             </Button>
        
//             <Paper>
//                 <Scheduler data={myapps} height={700} 
//                     // appointmentTooltipComponent={AppointmentTooltip}
//                     // onAppointmentClick={onAppointmentClick}
//                     // onAppointmentFormOpening={onAppointmentFormOpening}
                    
//                     // resourceCellRender={renderResourceCell}
//                 >

//                 <GroupingState
//                     // grouping={grouping}
//                     // groupByDate = {groupByDate}
//                     // groupOrientation={groupOrientation}
//                     />
//                 <IntegratedGrouping />
//                 <IntegratedEditing />
//                 <GroupingPanel />

//                 <EditingState
//                     // onCommitChanges={commitChanges}
//                     />
//                 <Resource
//                     fieldExpr="tennisID"
//                     dataSource={[
//                         { id: 1, text: 'Tennis 1', color: 'green' },
//                         { id: 2, text: 'Tennis 2', color: 'red' },
//                         { id: 3, text: 'Tennis 3', color: 'blue' }]}
//                 />
//                 <WeekView startDayHour={7} endDayHour={24} />
//                 <DayView name='day' startDayHour={7.5} endDayHour={24}/>

//                 <Appointments 
//                     appointmentComponent={Appointment}
                
//                     // appointmentContentComponent={AppointCont}
//                 />{/*  onClick={()=>handleOpen()} draggable={true} */}
                
//                 {/* <AppointmentTooltip
//                     showCloseButton
//                     showOpenButton
//                 /> */}
                
//                 <AppointmentForm />
// {/* 
//                 <Toolbar />
//                 <DateNavigator />
//                 <ViewSwitcher />
//                 <TodayButton />
//                 <DragDropProvider /> */}

//                 </Scheduler>
//             </Paper>


//             <React.Fragment >
//                 <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" 
//                         maxWidth="lg">
//                     <form onSubmit={handleDialogSubmit}>
//                     <DialogTitle id="form-dialog-title">Add New Reservation</DialogTitle>
//                     <DialogContent>

//                         <DialogContentText>
//                             {/**selects the admin who made the reservation, hard coded */}
//                             <FormControl className={styleclass.formControl}>
//                                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                                 <Select
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 value={dialogValue.admin}
//                                 onChange={(event) => setDialogValue({...dialogValue, admin: event.target.value})}
//                                 >
//                                 <MenuItem value={'Radu'}>Radu</MenuItem>
//                                 <MenuItem value={'Sergiu'}>Sergiu</MenuItem>
//                                 <MenuItem value={'Andrei'}>Andrei</MenuItem>
//                                 <MenuItem value={'Robi'}>Robi</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </DialogContentText>



//                         <FormControl className={styleclass.formControl}>
//                             <InputLabel>Field</InputLabel>
//                             <Select
//                             labelId= 'fields_select_label'
//                             id="demo-simple-select"
//                             value={dialogValue.area}
//                             onChange={(event) => setDialogValue({...dialogValue, area: event.target.value})}
//                             >
//                                 {area.map((el)=>{
//                                     return (
//                                         <MenuItem value ={el}>{el} </MenuItem>
//                                     )
//                                 })}
//                             </Select>
//                         </FormControl>

//                         {/* <Autocomplete
//                             id="field-picker"
//                             value={dialogValue.area}
//                             onChange={(event, newValue) => {
//                                 setDialogValue({...dialogValue, area: newValue});
//                             }}
//                             // inputValue={inputValue}
//                             // onInputChange={(event, newInputValue) => {
//                             //     setCrtField(newInputValue);
//                             // }}
//                             options={FIELDS}
//                             getOptionLabel={(option) => option}
//                             style={{ width: 300 }}
//                             renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />
//                             }
//                         /> */}

//                          {/**Choses date */}
//                          <form className={styleclass.container} noValidate>
//                             <TextField
//                                 id="date"
//                                 label="Appointment Date"
//                                 type="date"
//                                 defaultValue={today}
//                                 className={styleclass.textField}
//                                 InputLabelProps={{
//                                 shrink: true,
//                                 }}
//                                 onChange={(event) => setDialogValue({ ...dialogValue, date: event.target.value})}
//                             />
//                         </form>
//                         <br/> 
//                         {/** Time picker START */}
//                         <form className={styleclass.container} noValidate>
//                             <TextField
//                                 id="times"
//                                 label="Reservation Start Time"
//                                 type="time"
//                                 defaultValue="12:00"
//                                 className={styleclass.textField}
//                                 InputLabelProps={{
//                                 shrink: true,
//                                 }}
//                                 inputProps={{
//                                 // step: 300, // 5 min
//                                 step: 900, // 5 min
//                                 }}
//                                 onChange={(event) => setDialogValue({ ...dialogValue, start: event.target.value })}
//                             />
//                         </form>
//                         <br/>
//                         {/** Time picker END */}
//                         <form className={styleclass.container} noValidate>
//                             <TextField
//                                 id="timee"
//                                 label="Reservation End Time"
//                                 type="time"
//                                 defaultValue="12:00"
//                                 className={styleclass.textField}
//                                 InputLabelProps={{
//                                 shrink: true,
//                                 }}
//                                 inputProps={{
//                                 // step: 300, // 5 min
//                                 step: 900, // 5 min`x
//                                 }}
//                                 onChange={(event) => setDialogValue({ ...dialogValue, end: event.target.value })}
//                             />
//                         </form>

                        
//         {/* <Button 
//             className='time_select_button'
//             variant="contained" 
//             color="primary"
//             // onClick ={()=>removeItem(item.id)}
//             onClick={()=>handleOpenTime()} 
//             >
//             Time Select
//         </Button> */}
                        
//                         <br/>
//                         <TextField
//                             autoFocus
//                             // margin="dense"
//                             id="person"
//                             value={dialogValue.person}
//                             label="Person asking for App"
//                             type="text"
//                             size='medium'
//                             onChange={(event) => setDialogValue({ ...dialogValue, person: event.target.value })}
//                         />

//                         <br/>
//                         <TextField
//                             autoFocus
//                             // margin="dense"
//                             id="phone"
//                             value={dialogValue.phone}
//                             label="phone"
//                             type="text"
//                             size='medium'
//                             onChange={(event) => setDialogValue({ ...dialogValue, phone: event.target.value })}
//                         />
//                         <br/>
//                         <TextField
//                             autoFocus
//                             // margin="dense"
//                             id="comment"
//                             value={dialogValue.comment}
//                             label="Comment"
//                             type="text"
//                             size='medium'
//                             onChange={(event) => setDialogValue({ ...dialogValue, comment: event.target.value })}
//                         />

//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleClose} color="primary">
//                             Cancel
//                         </Button>
//                         <Button color="primary" onClick={handleDialogSubmit}>{/*type="submit" */}
//                                 Add
//                         </Button>
//                     </DialogActions>
//                     </form>
//                 </Dialog>
//             </React.Fragment>

//         </div>
//     )
// }

// export default OurScheduler
