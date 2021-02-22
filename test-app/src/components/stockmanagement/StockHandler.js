import React from 'react'
import { useState } from 'react'

const arrayofTypes = ['Warm Drink', 'Snack', 'Ernergy Drink','Service']

function StockHandler({pushTop}) {

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

        pushTop({name, type, price})
        
        setName('')
        setType('')
        setPrice(-1)
        
    }

    
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState(-1)

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
        <div className='type-control'>
            <label>Type of product: </label>
                <select name="prodTypes" 
                onChange={(e) => setType(e.target.value)} >
                    {arrayofTypes.map((el) => {
                        return (
                            <option value = {el}>{el}</option>)
                    })}
                 </select>
            {/* <input
            type='text'
            placeholder='add new Item Type'
            value={type}
            onChange={(e) => setType(e.target.value)}
            /> */}
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
