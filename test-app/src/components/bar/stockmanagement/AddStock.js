import { useState, useEffect} from 'react'
import MainBar from '../MainBar'
// import {Autocomplete} from '@material-ui/lab';
// import { Table } from 'react-bootstrap'
import { TextField } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'
import { FiCheck } from 'react-icons/fi';
import Button from 'react-bootstrap/esm/Button';



const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    return data
}


const fetchSuppliers = async () => {
    const res = await fetch('http://localhost:3001/suppliers')
    const data = await res.json()
    return data
}

const  AddStock = () => {

    const[suppliers, setSuppliers] = useState({sups: [], crt: ''})
    const[crtSupp, setCrtSupp] = useState(null)

    /**
     * items currently in stock , used for autocomplet
     */
    const[prods, setProds] = useState([])

    /**
     * upProds is the final output which will be sent to db
     */
    const[upProds, setUpProds] = useState([])

    // /**
    //  * upPrice is the price from supplier
    //  */
    // const[upPrice, setUpPrice] = useState(0)

    // /**
    //  * upStock is the number of an item purches
    //  */
    // const[upStock, setupStock] = useState(0)

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

            setSuppliers({sups: serverSuppliers, crt: serverSuppliers[0]})

            setProds(serverProds)

            setCrtSupp(suppliers[0])
        }
        getProds()
    
    }, [])

    // useEffect(()=>{
    //     console.log('crt sup')
    //     console.log(crtSupp)
    //     console.log('crt up rpods')
    //     console.log(upProds)
    //     console.log('crt item')
    //     console.log(crtItem)
    // },[crtSupp, suppliers, upProds])


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

    const bruhwaht= (e)=>{
        console.log(e.target.value)
        // console.log(JSON.stringify(crtSupp))
        setSuppliers({sups: suppliers.sups,
                      crt: e.target.value})
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

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  


//------------------------------------------------DEV/////////////----------------
    return (
        <div>

            <div className='form-control'>
                <label>Select Supplier</label>
                <select name="suppliers" 
                onChange={(e) => bruhwaht(e)
                } >
                    {
                    suppliers.sups.map((el) => {
                        return (
                            <option value = {el}>{el.name}</option>
                            )
                    })}
                </select>
            </div>

            <div>bruh
                {suppliers.crt != null&& <h2>{suppliers.crt.name}</h2>,
                 suppliers.crt != undefined&&<h2>{suppliers.crt.bank}</h2>,
                 suppliers.crt != undefined&&<h2>{suppliers.crt.cui}</h2>
                }   
            </div>
        
            <div className='datagrid' style={{ height: 400, width: '50%'}}>
                <DataGrid rows={prods} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </div>

        
    )
}

export default AddStock
