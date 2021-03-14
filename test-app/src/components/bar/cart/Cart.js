
import { Button, Paper } from '@material-ui/core';
import CartButton from './CartButton';
import { FiTrash2, FiShoppingCart} from "react-icons/fi"
import { Plus, Save, BookOpen} from 'react-feather'
import ChangePriceB from './ChangePriceB'
import { useState, useEffect } from 'react'
import MyDialogue from '../pieces/MyDialogue'

import { addCartList, fetchCartProdLists } from '../../DBconn'

import { css, cx } from '@emotion/css'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

import RecCartButton from './RecCartButton'

function Cart({basket, removeItem ,removeAllCart, changeItem, addtoCart}) {

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

    const loadListButton = () => {
        removeAllCart()
        loadList.map(el => {
            for(var i = 1; i <= el.stock; i++){
                addtoCart(el.id)
            }
        })
    }

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = (value) => {
        setOpen(false)
        setLoadList(value)
        loadListButton()
    };

    
    return (
        <div className='cart'>

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <MyDialogue open={open} selectedValue={loadList} onClose={handleClose} />

        <GridRow align='center ' justify="end ">
            <GridColumn width ={4}>
                <Button className = 'cart_svlist'
                    variant="contained" 
                    color="primary"
                    size="large"
                    startIcon={<Save />}
                    onClick ={()=>saveList()}
                    >
                    Save List
                </Button>
            </GridColumn>
            <GridColumn width ={4}>
                <Button className = 'cart_svlist'
                    variant="contained" 
                    color="primary"
                    size="large"
                    startIcon={<BookOpen />}
                    onClick ={handleClickOpen}
                    >
                    Load List
                </Button>
            </GridColumn>
            <GridColumn width={4}>
             <Button className = 'cart_svlist'
                variant="contained" 
                color="primary"
                size="large"
                startIcon={<FiTrash2 />}
                onClick ={()=>removeAllCart()}
                >
                Empty cart
             </Button>
            </GridColumn>
        </GridRow>
        <GridRow>
            <GridColumn width={6}>
             <h2>Cart Items</h2>
            </GridColumn>
            
        </GridRow>
            <Paper style={{maxHeight: 550, overflow: 'auto'}} >
            <div className ={css`
                    padding: 32px;
                    background-color: hotpink;
                    font-size: 24px;
                    border-radius: 4px;
                    overflow: scroll;
                    white-space: nowrap;
                    `}>
               {basket.map((item) => 
                ( 
                <div key = {item.id} 
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
                Finish total: {getSum()} lei
            </div>
            <Button 
                className='finalbasket'
                variant="contained"
                color='green'
                size="large"
                startIcon={<FiShoppingCart />}
                // onClick ={()=>removeItem(item.id)}
                >
            </Button>
        </div> 
    )
}

export default Cart
