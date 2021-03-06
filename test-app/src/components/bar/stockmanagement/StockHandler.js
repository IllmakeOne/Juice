import { useState, useEffect } from 'react'
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import AutoCompAddItem from '../pieces/AutoCompAddItem';

import {fetchProds} from '../DBconn'

const arrayofTypes = ['Warm Drink', 'Snack', 'Ernergy Drink','Service']


//this should be called add item 
function StockHandler({pushTop}) {

    const [prods, setProds] = useState([])

    useEffect(()=>{
        const gett = async () => {
            const inprods = await fetchProds()
            setProds({prods: inprods})
        }

        gett()

    },[])

    useEffect(()=>{
        console.log(prods)
    },[prods])

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
        
        // prods.map((el) => {
        //     if(el.name == name){
        //         alert(`Item with nane ${name} already exists`)
        //         return
        //     }
        // })

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

    // useEffect(()=>{
    //     console.log('Name: ' +name)
    // },[name])
    // useEffect(()=>{
    //     console.log('Type: ' +type)
    // },[type])
    // useEffect(()=>{
    //     console.log('Price: ' + price)
    // },[price])
    // useEffect(()=>{
    //     console.log('Vat: ' +vat)
    // },[vat])

    return (
    // <div>
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
        
        {/* <div>
        <label>VAT  </label>
                <select name="prodTypes" 
                    onChange={(e) => setVat(e.target.value)}>
                          <option value ={1}>5% (service) </option>
                          <option value ={2}>9% (juice/snack)</option>
                          <option value ={3}>19% (alchool) </option>
                 </select>
        </div> */}

        <input type='submit' value='Save Product' className='btn btn-block' />
        
    {/* </div> */}
    </form>
    )
}

export default StockHandler
