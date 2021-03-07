
import { Button, Paper } from '@material-ui/core';
import CartButton from './CartButton';
import { FiTrash2, FiShoppingCart} from "react-icons/fi"
import ChangePriceB from './ChangePriceB'
import React from 'react'

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

    
    return (
        <React.Fragment>
        <div className='cart'>
        <GridRow>
            <GridColumn width={6}>
             <h2>Cart Items</h2>
            </GridColumn>
            <GridColumn width={6}>
             <Button className = 'deleteAllcart'
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
