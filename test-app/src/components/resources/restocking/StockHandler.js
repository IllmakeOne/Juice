import { useState, useEffect } from 'react'
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import AutoCompAddItem from './AutoCompAddItem';
import { fetchProds } from '../../DBconn';

// import {fetchProds} from '.../DBconn'

const arrayofTypes = ['Warm Drink', 'Snack', 'Ernergy Drink','Service']


//this should be called add item 
function StockHandler({pushTop}) {

    const [prods, setProds] = useState([])

    useEffect(()=>{
        const gett = async () => {
            const inprods = await fetchProds
            setProds({prods: inprods})
        }

        gett()

    },[])

    // useEffect(()=>{
    //     console.log(prods)
    // },[prods])

    const onSubmit = (e) => {
        e.preventDefault()

        if(name == ''){
        alert('Add prod name please')
            return 
        }
        if(price <= 1){
            alert('Add valid price')
            return 
        }
    

        pushTop({name, type, price, vat})
        console.log({name, type, price, vat})
        
        setName('')
        setType('')
        setPrice(-1)
    }


    const setTypeandVAT = (itemtyvat) => {
        setVat(itemtyvat.vat)
        setType(itemtyvat.name)
        console.log(JSON.stringify(itemtyvat) + 'IN Stockhandler')
    }

    
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState(-1)
  const [vat, setVat] = useState(1)

    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Name</label>
            <input
            type='text'
            placeholder='add new Item Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div>
            <AutoCompAddItem upValue = {setTypeandVAT}/>
        </div>

        <div className='form-control form-control-check'>
            <label>Price</label>
            <input 
            type='number'
            value={price}
            onChange={(e) => setPrice(e.currentTarget.value)}
            />
        </div>

        <input type='submit' value='Save Product' className='btn btn-block' />
        
    </form>
    )
}

export default StockHandler
