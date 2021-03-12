
import { Button, Paper } from '@material-ui/core';
import CartButton from './CartButton';
import { FiTrash2, FiShoppingCart} from "react-icons/fi"
import { Plus, Save, BookOpen} from 'react-feather'
import ChangePriceB from './ChangePriceB'
import React from 'react'

import { addCartList } from '../../DBconn'

import { css, cx } from '@emotion/css'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

import RecCartButton from './RecCartButton'

function Cart({basket, removeItem ,removeAllCart, changeItem}) {


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

    
    return (
        <React.Fragment>
        <div className='cart'>
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
                    // onClick ={()=>removeAllCart()}
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
        </React.Fragment>
    )
}

export default Cart
