import { useState, useEffect} from 'react'
import MainBar from '../MainBar'
// import {Autocomplete} from '@material-ui/lab';
// import { Table } from 'react-bootstrap'
import { Button, Input, TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'
import { FiCheckSquare } from 'react-icons/fi';
import { fetchProds, fetchSuppliers, fetchTypes } from '../../DBconn';
import { Autocomplete } from '@material-ui/lab';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { css } from '@emotion/css'


import { makeStyles } from '@material-ui/core/styles';      
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    }
  });

const  AddStock = () => {

    const defaultupProds =  [
        {
            id: 2,
            name: 'Tennis',
            vat: 5,
            type: 'Service',
            stock: 2,
            price: 3                                       
        },
        {
            id: 4,
            name: 'Applejuice',
            vat: 8,
            type: 'Juice',
            stock: 3,
            price: 3                                       
        }    
    ]
    
    const classes = useStyles();


    const[suppliers, setSuppliers] = useState()
    const[crtSupp, setCrtSupp] = useState(null)
    const[prodTypes, setprodTypes] = useState([])

    /**
     * items currently in stock , used for autocomplet
     */
    const[prods, setProds] = useState([])

    /**
     * upProds is the final output which will be sent to db
     */
    const[upProds, setUpProds] = useState([])

    /**
     * current item being added
     */
    const[crtItem, setCrtItem] = useState({
                                        id: '',
                                        vat: 0,
                                        type: '',
                                        stock: 0,
                                        price: 0                                       
                                    })



    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            const serverSuppliers = await fetchSuppliers()
            const serverTypes = await fetchTypes()

            setSuppliers(serverSuppliers)

            setProds(serverProds)

            setprodTypes(serverTypes)

            // setCrtSupp(suppliers[0])
        }
        getProds()
    
    }, [])

    useEffect(()=>{
        // console.log('crt item')
        // console.log(crtItem)
        console.log('crt up rpods')
        console.log(upProds)
        // console.log('crt item')
        // console.log(crtItem)
    },[upProds])   


    const handleSubmitCrtItme =()=>{

        if(crtItem.price < 0.1){
            alert('Invalid Price') 
        } else if(upProds.map(el=>el.name).includes(crtItem.name)){
            alert('This item has already been adeded') 
        } else {
            upProds.push(crtItem)
            setUpProds(upProds)
            setCrtItem({
                id: '',
                vat: 0,
                type: '',
                stock: 0,
                price: 0                                       
            })
        }
        console.log(upProds)
    }

//----------------------------------------------------------------

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'type', headerName: 'Prod Type', width: 130 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
    {
        field: 'stock',
        headerName: 'stock',
        type: 'number',
        width: 90,
    },
  ];

  const getCrtVat=()=>{
    const res = prodTypes.map(el=>{
        if(el.name == crtItem.type)
            return el.vat
            })
    return res
  }

  const handlechangePrice = e => {
    setCrtItem({...crtItem, price: e.target.value})
  }

  const handlechangeStock = e => {
    setCrtItem({...crtItem, stock: e.target.value})
  }

  const handFinalSubmit = () =>{
        
  }


//------------------------------------------------DEV/////////////----------------
    return (
        <div>


            {/**
             *  Combo box for selecting supplier for current items being added
             */}
            <Autocomplete
                id="supplier-box"
                options={suppliers}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                value={crtSupp}
                selectOnFocus
                clearOnBlur
                freeSolo
                handleHomeEndKeys
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                onChange={(ev, newVal)=>{
                    setCrtSupp(newVal)
                }}
            />
            <div>
                {crtSupp ? <h2>{crtSupp.name}</h2>:<h2>________</h2>}
                {crtSupp ? <h3>{crtSupp.bank}</h3>:<h2>________</h2>}
                {crtSupp ? <h3>{crtSupp.cui}</h3>:<h2>________</h2>} 
            </div>

            {/**
             *  Imput area for items 
             */}
            <GridRow>
                
                
                <GridColumn id='gc1'>
                    <Autocomplete
                        id="auto-prods"
                        options={prods}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        value={crtItem}
                        selectOnFocus
                        clearOnBlur
                        freeSolo
                        handleHomeEndKeys
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        onChange={(ev, newVal)=>{
                            setCrtItem({...newVal, stock : 0, price: 0})
                            // setCrtItem(newVal)
                            console.log(crtItem)
                        }}
                    /> 
                </GridColumn>

                <GridColumn id='gc5'>
                    <h3>TVA:{getCrtVat()} %</h3>
                </GridColumn>

                <GridColumn id='gc2'>
                    <FormControl>
                        <InputLabel htmlFor="component-simple">Stock</InputLabel>
                        <Input
                            name='stockInput'
                            type='number'
                            error={crtItem.stock < 0.1}
                            // placeholder={crtItem.stock}
                            value={crtItem.stock}
                            onChange={handlechangeStock}
                        />
                    </FormControl>

                </GridColumn>
                <GridColumn id='gc4'>
                    <FormControl >
                        <InputLabel htmlFor="component-simple">Price</InputLabel>
                        <Input  
                            name='priceInput'
                            type='number'
                            // placeholder={crtItem.stock}
                            value={crtItem.price}
                            error={crtItem.price < 0.1}
                            defaultValue={0} 
                            onChange={handlechangePrice}
                        />
                    </FormControl>
                </GridColumn>

                <GridColumn id='gc3'>
                    <h3>Total: {crtItem.price * crtItem.stock} </h3>
                </GridColumn>

                <GridColumn id='gc6'>
                    <Button 
                        // className='b.changeprice'
                        // variant="contained"
                        color="primary"
                        size='large'
                        startIcon={<FiCheckSquare />}
                        onClick ={()=>handleSubmitCrtItme()}
                        >
                    </Button><br/>
                </GridColumn>

            </GridRow>
        

            {/**
             *  Table for dislpaying current items being added
             * 
             * checkboxSelection
             */}
            {/* <div className='datagrid' style={{ height: 400, width: '90%'}}>
                {upProds && <DataGrid rows={upProds} columns={columns} pageSize={8} />}
            </div> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Stock</TableCell>
                    <TableCell align="right">Cost</TableCell>
                    <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {upProds.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.name} </TableCell>
                        <TableCell align="right">{row.type}</TableCell>
                        <TableCell align="right">{row.stock}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.price*row.stock}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>

             <div 
                className={css`
                background-color: hotpink
                `}>         
                <Button 
                    // className='b.changeprice'
                    // variant="contained"
                    color="primary"
                    size='large'
                    startIcon={<FiCheckSquare />}
                    onClick ={()=>handFinalSubmit()}
                    >
                </Button>
            </div>

        </div>

        
    )
}

export default AddStock
