
import { Button, Paper } from '@material-ui/core'
import CartButton from './CartButton'

import { GiCash } from "react-icons/gi";
import { FiTrash2, FiSave, FiBookOpen} from "react-icons/fi"
import { IoIosCash } from "react-icons/io"
import { GoCreditCard } from "react-icons/go"
import { css, cx } from '@emotion/css'

import { useState, useEffect } from 'react'

import MyDialogue from '../pieces/MyDialogue'
import { addCartList, fetchCartProdLists } from '../../DBconn'
import ChangePriceB from './ChangePriceB'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

import RecCartButton from './RecCartButton'

function Cart({basket, removeItem ,removeAllCart, changeItem, addBulkItem}) {

    const [prodLists, setProdLists] = useState([])
    const [loadList, setLoadList] = useState([])

    useEffect(() => {
        const anon = async ()=>{
            const serverLists = await fetchCartProdLists()
            setProdLists(serverLists)
            // console.log(serverLists)
        }
        anon()

    }, [])

    const getSum = () => {
        var sum = 0
        basket.forEach(element => {
            sum += element.price * element.stock            
        });
        return sum
    }

    const saveList = () => {
        addCartList(basket)
        removeAllCart()
    }

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleSubmit = (value) => {
        setOpen(false)
        removeAllCart()
        addBulkItem(value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    
    return (
        <div >

        <MyDialogue open={open} selectedValue={loadList} onSubmit={handleSubmit} onClose={handleClose} />
            
        <div className='cart'>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button> */}
            

        <GridRow className='test' align='center ' justify="end ">
            <GridColumn width ={4}>
                <Button className = 'cart_svlist'
                    variant="outlined" 
                    color="primary"
                    size="large"
                    startIcon={<FiSave />}
                    onClick ={()=>saveList()}
                    >
                    Save List
                </Button>
            </GridColumn>
            <GridColumn width ={4}>
                <Button className = 'cart_svlist'
                    variant="outlined" 
                    color="primary"
                    size="large"
                    startIcon={<FiBookOpen />}
                    onClick ={handleClickOpen}
                    >
                    Load List
                </Button>
            </GridColumn>
            <GridColumn width={4}>
             <Button className = 'cart_svlist'
                variant="outlined" 
                color="primary"
                size="large"
                startIcon={<FiTrash2 />}
                onClick ={()=>removeAllCart()}
                >
                Empty cart
             </Button>
            </GridColumn>
        </GridRow>
             <h2>Cart Items</h2>
        {/* <GridRow>
            <GridColumn width={6}>
             <h2>Cart Items</h2>
            </GridColumn>
            
        </GridRow> */}
            <Paper style={{maxHeight: 550, overflow: 'scroll'}} >
            <div className ={css`
                    padding: 12px;
                    background-color: white;
                    font-size: 24px;
                    height: 100%;
                    border-radius: 4px;
                    white-space: nowrap;
                    `}>
               {basket.map((item) => 
                ( 
                <div key = {item.id} className ='cartbutton' 
                    >
                    <CartButton item = {item} 
                        removeItem = {removeItem}
                        changeItem = {changeItem}/>
                </div>            
                )) 
            }
             </div>
        </Paper>
        
        <div className='finalbasket'>
            <h2>Finish total: {getSum()} lei</h2>
        </div>
            {/* <Button 
                className='finalbasket'
                variant="contained"
                color='green'
                size="large"
                startIcon={<FiShoppingCart />}
                // onClick ={()=>removeItem(item.id)}
                >
            </Button> */}
        <GridRow>
            <GridColumn width ={4}>
                <Button className = 'cart_svlist'
                        variant="outlined" 
                        color="primary"
                        size="large"
                        startIcon={<IoIosCash />}
                        // onClick ={handleClickOpen}
                        >
                        Cash
                </Button>
            </GridColumn>
            <GridColumn width={4}>
                <Button className = 'cart_svlist'
                    variant="outlined" 
                    color="primary"
                    size="large"
                    startIcon={<GoCreditCard />}
                    // onClick ={()=>removeAllCart()}
                    >
                    Carad
                </Button>
            </GridColumn>
            
            <GridColumn width={4}>
                <Button className = 'cart_svlist'
                    variant="outlined" 
                    color="primary"
                    size="large"
                    startIcon={<GiCash />}
                    // onClick ={()=>removeAllCart()}
                    >
                    CandC
                </Button>
            </GridColumn>
        </GridRow>

        </div>  
        </div> 
    )
}

export default Cart
