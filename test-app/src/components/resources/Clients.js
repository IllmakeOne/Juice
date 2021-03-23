
import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';      
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { Button, Input, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

import { fetchClients } from '../DBconn'
import SubHBox from './SubHBox'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { FiCheckSquare, FiSave } from 'react-icons/fi'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';




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

    const handleCangeName = e => {
        setClient({...client, name: e.target.value})
    }
    const handleChangePhone = e => {
        setClient({...client, phone: e.target.value})
    }
    const handleChangeEmail = e => {
        setClient({...client, email: e.target.value})
    }
    const handleChangeComment = e => {
        setClient({...client, comment: e.target.value})
    }
    

    return (
        <div> <br/><br/><br/><br/>
            <TableContainer component={Paper} className={classes.tablecontainer}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow >
                    <TableCell className={classes.topcell} align="center">Name   </TableCell>
                    <TableCell className={classes.topcell} align="center">Email</TableCell>
                    <TableCell className={classes.topcell} align="center">Phone</TableCell>
                    <TableCell className={classes.topcell} align="center">Subsription</TableCell>
                    <TableCell className={classes.topcell} align="center">Comment</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((row,index) => (
                    <TableRow key={row.name} style ={ index % 2? { background : "#fdffe0" }:{ background : "white" }}>
                        <TableCell className={classes.cell} component="th" scope="row">{row.name} </TableCell>
                        <TableCell className={classes.cell} align="right">{row.email? row.email:'- - -'}</TableCell>
                        <TableCell className={classes.cell} align="right">{row.phone?row.phone:'- - -'}</TableCell>
                        <TableCell className={classes.cell} align="right">{row.crtsub.type}</TableCell>
                        <TableCell className={classes.cell} align="right">{row.comment}</TableCell>
                         
                        {/*<TableCell  component="th" scope="row">{row.name} </TableCell>
                        <TableCell  align="right">{row.email? row.email:'- - -'}</TableCell>
                        <TableCell align="right">{row.phone?row.phone:'- - -'}</TableCell>
                        <TableCell  align="right">{row.crtsub.type}</TableCell>
                        <TableCell  align="right">{row.comment}</TableCell> */}
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

            <br/>
            <br/>

            <GridRow >
                <GridColumn p={['s', 'm']}>
                    <Autocomplete
                        className={classes.tablecontainer}
                            id="auto-clients"
                            options={clients}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 300 }}
                            value={client}
                            selectOnFocus
                            clearOnBlur
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
                </GridColumn>
                <GridColumn p={['m', 'm']}>
                    <Paper  elevation={2} 
                        className={classes.clientpaper}>
                        {/* <h2>{client ? client.name : '_ _ _ _ _ _ _ _'}</h2> */}
                        <GridWrap maxWidth={1000}> <GridRow  align="" direction='row' wrap='wrap' >
                            <GridColumn width = {3}>
                                <GridRow direction = 'column'>
                                <GridColumn textAlign={'center'} width = {4}p={['s', 'l']}> 
                                <FormControl >
                                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                                        <Input  
                                            name='nameInput'
                                            type='text'
                                            value={client? client.name: ''}
                                            defaultValue={0} 
                                            onChange={handleCangeName}
                                        />
                                    </FormControl>
                                </GridColumn>
                                <GridColumn p={['s', 'l']}>
                                    <FormControl >
                                        <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
                                        <Input  
                                            name='phoneInput'
                                            type='text'
                                            // placeholder={crtItem.stock}
                                            value={client? client.phone: ''}
                                            error={client.phone.lenght < 10}
                                            defaultValue={0} 
                                            onChange={handleChangePhone}
                                        />
                                    </FormControl>
                                </GridColumn>
                                <GridColumn p={['s', 'l']}>
                                    <FormControl >
                                        <InputLabel htmlFor="component-simple">Email</InputLabel>
                                        <Input  
                                            name='emailInput'
                                            type='text'
                                            // placeholder={crtItem.stock}
                                            value={client? client.email: ''}
                                            // error={client.phone.lenght < 10}
                                            defaultValue={0} 
                                            onChange={handleChangeEmail}
                                        />
                                    </FormControl>
                                </GridColumn>
                                <GridColumn p={['s', 'l']}>
                                    <FormControl >
                                        <InputLabel htmlFor="component-simple">Comment</InputLabel>
                                        <Input  
                                            name='commentInput'
                                            type='text'
                                            placeholder={'comment'}
                                            value={client? client.comment: ''}
                                            // error={client.phone.lenght < 10}
                                            // defaultValue={0} 
                                            onChange={handleChangeComment}
                                        />
                                    </FormControl>
                                </GridColumn>
                                </GridRow>
                            </GridColumn>
                            <GridColumn p = 'l' width = {4}>
                                         <Paper style={{maxHeight: '50%', overflow: 'scroll'}}>
                                                {basicSubscribtionHistory.map( (el) =>(
                                                    <div className={`${classes.subsriptionH} ${classes.shadow}`} >
                                                        <SubHBox sub = {el}/>
                                                    </div>
                                            ))}
                                        </Paper>
                            </GridColumn>
                        </GridRow></GridWrap>

                        <Button  className={classes.submitButton}
                            // className='b.changeprice'
                            // variant="contained"
                            color="primary"
                            size='large'
                            startIcon={<FiSave />}
                            onClick ={()=>onSubmit()}
                            >
                                Save
                        </Button>
                    </Paper>
                </GridColumn>
                
            </GridRow>
            
            
               
        </div>
    )
}



const basicClient = {name:'',
                    phone: '',
                    email: '',
                    comment: ''}

const basicSubscribtionHistory=[{
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
]

const useStyles = makeStyles({
    tablecontainer: {
        left: '12%',
        top: '10%',
        width: '100%',
        
        // width: 1250,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    },

    clientpaper: {
        // width: 1250,
        
        width: 1000,
        height: 500,
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)'
    },

    table: {
        width: '100%',
    },

    cell:{
        fontFamily: 'Arial, Helvetica, sans-serif',
        // width: 200,
        // height: 50,
        textAlign: 'center',
        fontSize: 17,
        // background: 'rgb(255, 255, 230)',
        // borderRight: '1px solid orange',
        // borderLeft: '1px solid orange',
    },

    topcell:{
        textAlign: 'center',
        fontSize: 17,
        background: 'rgb(255, 255, 230)',        
        borderBottom: '2px solid orange'
    },
    
    shadow:{
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    },

    submitButton:{
        background: 'rgb(255, 173, 51,.6)',
        color: '#1259a9 ',
        fontFamily: 'Arial, Helvetica, sans-serif',
        // position: 'relative',
        // left: '85%',
        // top: '75%',
    },

    subsriptionH:{        
        background: 'rgb(255, 255, 230)',       
    }

  });

export default Clients
