import { useState, useEffect} from 'react'
import MainBar from '../MainBar'
// import {Autocomplete} from '@material-ui/lab';
// import { Table } from 'react-bootstrap'
import { TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'
import { FiCheck } from 'react-icons/fi';
import { fetchProds, fetchSuppliers } from '../../DBconn';
import { Autocomplete } from '@material-ui/lab';

import InputLabel from '@material-ui/core/InputLabel';
import { Input } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { css } from '@emotion/css'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'


const  AddStock = () => {

    const[suppliers, setSuppliers] = useState()
    const[crtSupp, setCrtSupp] = useState(null)

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
                                        stock: 0,
                                        total: 0                                        
                                    })



    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            const serverSuppliers = await fetchSuppliers()

            setSuppliers(serverSuppliers)

            setProds(serverProds)

            // setCrtSupp(suppliers[0])
        }
        getProds()
    
    }, [])

    useEffect(()=>{
        console.log('crt item')
        console.log(crtItem)
        // console.log('crt up rpods')
        // console.log(upProds)
        // console.log('crt item')
        // console.log(crtItem)
    },[crtItem])


    const onSelectItem = (item)=>{
        // console.log(item)
        setCrtItem({
            ...crtItem,
            id: item.id,
            vat: item.type =='Service'? 5:9,
        })
    }

    const finalSubmit = () =>{
        //send upProds to db
        //TODO
    }

    const upItem= () => {
        // e.preventDefault()
        upProds.push(crtItem)
        setUpProds(upProds)
        //IT DOEST REFESH HERE AND IDK WHYYYYY
        console.log(upProds)
        
    }

    const selectedsetUpPrice = (buyprice) =>{
        setCrtItem({...crtItem, 
            price: buyprice,
            total: buyprice*crtItem.stock})
    }

    const selectedsetUpStock = (resupp) =>{
        setCrtItem({...crtItem, 
            stock: resupp,
            total: resupp*crtItem.price})
    }



//------------------------------------------------DEV----------------

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
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  const handleChange = (e) => {
    setCrtSupp(e.target.vale)
  }


//------------------------------------------------DEV/////////////----------------
    return (
        <div>

            <Autocomplete
                id="combo-box"
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
                            setCrtItem({...newVal, stock : 0})
                            // setCrtItem(newVal)
                        }}
                    /> 
                </GridColumn>
                <GridColumn id='gc2'>
                    <Input
                        type='number'
                        placeholder={crtItem.stock}
                        // value={crtItem.stock}
                        onChange={(e) => setCrtItem({...crtItem, stock: e.currentTarget.value})}
                    />
                </GridColumn>
                <GridColumn id='gc3'>
                    
                </GridColumn>
                <GridColumn id='gc4'>
                    
                </GridColumn>

            </GridRow>

            <div>
                {crtSupp && <h2>{crtSupp.name}</h2>}
                {crtSupp &&<h3>{crtSupp.bank}</h3>}
                { crtSupp &&<h3>{crtSupp.cui}</h3>
                }   
            </div>
        
            <div className='datagrid' style={{ height: 300, width: '50%'}}>
                <DataGrid rows={upProds} columns={columns} pageSize={8} checkboxSelection />
            </div>
        </div>

        
    )
}

export default AddStock
