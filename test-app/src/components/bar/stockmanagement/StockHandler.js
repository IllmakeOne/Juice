import React from 'react'
import { useState } from 'react'

const arrayofTypes = ['Warm Drink', 'Snack', 'Ernergy Drink','Service']

function StockHandler({prods, pushTop}) {

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
        
        prods.map((el) => {
            if(el.name == name){
                alert(`Item with nane ${name} already exists`)
                return
            }
        })

        pushTop({name, type, price, tva})
        
        setName('')
        setType('')
        setPrice(-1)
        
    }

    
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState(-1)
  const [tva, setTVA] = useState(1)

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
        
        <div>
        <label>VAT  </label>
                <select name="prodTypes" 
                    onChange={(e) => setTVA(e.target.value)}>
                          <option value ={1}>5% (service) </option>
                          <option value ={2}>9% (juice/snack)</option>
                          <option value ={3}>19% (alchool) </option>
                 </select>
        </div>

        <input type='submit' value='Save Product' className='btn btn-block' />
    </form>
    )
}

export default StockHandler
