import { useState, useEffect} from 'react'
import MainBar from '../MainBar'
// import {Autocomplete} from '@material-ui/lab';
import { Table } from 'react-bootstrap'
import { TextField } from '@material-ui/core';
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
        console.log(JSON.stringify(e.target.value))
        // console.log(JSON.stringify(crtSupp))
        setSuppliers({sups: suppliers.sups,
                      crt: e.target.value})
    }
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
        
            <h1>Table start:</h1>
            <Table striped bordered hover className=''>
                <thead>
                    <tr>
                    <th>#|</th>
                    <th>|Product|</th>
                    <th>|Stock to be Added|</th>
                    <th>|Price without VAT|</th>
                    <th>|VAT|</th>
                    <th>|Total without VAT</th>
                    <th>  </th>
                    </tr>
                </thead>
                <tbody className = ''>

                    {upProds.map((el)=>{
                        return (
                            <tr>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.stock}</td>
                            <td>{el.price}</td>
                            <td>{el.vat}%</td>
                            <td>{el.stock * el.price}</td>
                            </tr>                            
                        )
                    })}

                    <tr>
                        <td>
                            {crtItem.id}
                        </td>
                    <td>
                        <div className='form-control'>
                            <select name="prodsAddStock" 
                            onChange={(e) => onSelectItem(e.target.value)} >
                                {
                                prods.map((el) => {
                                    return (
                                        <option value = {el}>{el.name}</option>)
                                })}
                            </select>
                         </div>
                    </td>
                    <td>
                        <div className='form-control'>
                            <input
                                type='number'
                                placeholder='1'
                                value={crtItem.stock}
                                onChange={(e) => selectedsetUpStock(e.currentTarget.value)}
                            />
                        </div>
                    </td>
                    <td>
                         <div className='form-control'>
                                <input
                                    type='number'
                                    placeholder='1'
                                    value={crtItem.price}
                                    onChange={(e) => selectedsetUpPrice(e.currentTarget.value)}
                                 />
                        </div>
                    </td>

                    <td>
                        {crtItem.vat}%
                    </td>

                    <td>
                        {crtItem.total}
                    </td>
                        <Button 
                            variant="outline-primary" 
                            onClick ={()=>upItem()}
                            >
                            <FiCheck />
                         </Button>{' '}        
                    </tr>
                    

                </tbody>
                </Table>

            </div>

        
    )
}

export default AddStock
