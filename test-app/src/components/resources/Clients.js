
import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'      

import { Button, Input, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

import { fetchClients } from '../DBconn'
import SubHBox from './SubHBox'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { FiCheckSquare, FiSave } from 'react-icons/fi'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';


import EditData from './clients/EditData';
import InfoTabs from './clients/InfoTabs';
import ClientsTable from './clients/ClientsTable';




function Clients() {
    const classes = useStyles();

    const [clients, setClients] = useState([])
    const [client, setClient] = useState(basicClient)


    useEffect(() =>{
        const getClients = async () => {
            const serverProds = await fetchClients()
            setClients(serverProds)
        }
        getClients()
    }, [])

    const onSubmit = () => {

        //send item to db
    }
    

   
    return (
        <div> <br/><br/><br/><br/>
            <br/>
         <Autocomplete
            className={`${classes.shadow} ${classes.autocomp}`}
                id="auto-clients"
                options={clients}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                value={client}
                selectOnFocus
                clearOnBlur
                // getOptionSelected={defaultValue}
                handleHomeEndKeys
                renderInput={(params) => <TextField {...params} label='Find Client' variant='outlined' />}
                onChange={(ev, newVal)=>{
                    if(newVal) {setClient({name:newVal.name,
                                phone: newVal.phone?newVal.phone:'',
                                email: newVal.email?newVal.email:'',
                                comment: newVal.comment?newVal.comment:''})
                    // setCrtItem(newVal)
                    console.log(newVal)}
                }}
            /> 
                    
            <Paper  elevation={2} 
                className={classes.shadow}>
                <GridRow  direction='row' wrap='wrap' >

                    <GridColumn width={4} p = 's'>
                        <div className={classes.clientData}>
                        <EditData client={client} setClient={setClient} Submit = {onSubmit}/></div>
                    </GridColumn>


                    <GridColumn p = 'm' width = {4}>
                        <Paper style={{height: 650, overflow: 'scroll'}}>
                        {/* <div className={`${classes.subsriptionH} ${classes.shadow}`} > */}
                            {basicSubscribtionHistory.map( (el) =>(
                                    <SubHBox sub = {el}/>
                            ))}
                        {/* </div> */}
                        </Paper>
                    </GridColumn>




                    <GridColumn p = 'm' width = {4}>
                        <InfoTabs/>
                    </GridColumn>

                </GridRow>
            </Paper>
            
               
        </div>
    )
}



const useStyles = makeStyles({
    clientData: {
        // width: 1250,  
        height : 500,
        padding: 10,
    },

    autocomp:{
        padding: 10,
    },
    
    shadow:{
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    },
    subsriptionlist:{        
        background: 'rgb(255, 255, 230)',  
        overflow: 'scroll',     
        height : 1000,
    }

  });



  const basicClient = {name:'',
                    phone: '',
                    email: '',
                    comment: ''}

const basicSubscribtionHistory=[{
    "type": "F10",
    "left": 10,
    'start': '2/4/2021',
    "end": "8/8/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/4/2021',
    "end": "15/5/2021"
},{
    "type": "F10",
    "left": 10,
    'start': '2/4/2021',
    "end": "2/5/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},{
    "type": "F10",
    "left": 10,
    'start': '02/04/2021',
    "end": "02/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
{
    "type": "FF",
    "left": -1,
    'start': '15/04/2021',
    "end": "15/05/2021"
},
]

export default Clients
