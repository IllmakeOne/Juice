import { useState, useEffect} from 'react'
import MainBar from '../MainBar'
// import {Autocomplete} from '@material-ui/lab';
import { TextField } from '@material-ui/core';



const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/suppliers')
    const data = await res.json()
    return data
}

const  AddStock = ({zeers, pushTop}) => {




    const onSubmit= (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    const[suppliers, setSuppliers] = useState([])
    const[supplier, setSupplier] = useState('')
    const[noProd, setNoProd] = useState(1)
    const[prods, setProds] = useState([])
    const[tvaless, setTvaless] = useState(0)
    // conss[prods]


    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            setSuppliers(serverProds)
            setSupplier(suppliers[0])
        }
        getProds()
    
        console.log(zeers)
    // setTimeout(_exportPdf(),10000)
    }, [])

    // useEffect(()=> {console.log(suppliers)},[suppliers])

    return (
        <form className='add-form-supplier addstock' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Selecte Supplier</label>
                <select name="suppliers" 
                onChange={(e) => setSupplier(e.target.value)} >
                    {//console.log("supliedss"),console.log(suppliers),
                     suppliers.map((el) => {
                        // console.log(el)
                        return (
                            <option value = {el}>{el.name}</option>)
                    })}
                 </select>
            </div>
            {/*console.log("supplier"),console.log(supplier)*/}
            {/* <div className='form-control'>
                <h3>Cui: {supplier.cui}</h3>
                <h3>Bank: {supplier.bank}</h3>
            </div> */}
{/* 
            <Autocomplete
                id="prodct selection"
                options={zeers}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(zeers) => 
                <TextField {...zeers} label="Look for product" variant="outlined" />}
            /> */}
            
            <div className='form-control'>
                <label>Numar Produse</label>
                <input
                type='number'
                placeholder='1'
                value={noProd}
                onChange={(e) => setNoProd(e.currentTarget.value)}
                />
            </div>
            
            <div className='form-control'>
                <label>Pret fara TVA</label>
                <input
                type='number'
                placeholder={5,55}
                value={tvaless}
                onChange={(e) => setTvaless(e.currentTarget.value)}
                />
            </div>

    
            <input type='submit' value='Save Product' className='btn btn-block' />
        </form>
    )
}

export default AddStock
