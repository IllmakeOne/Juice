
import { Button } from '@material-ui/core';
import CartButton from './CartButton';
import { FiTrash2, FiShoppingCart} from "react-icons/fi"
import ChangePriceB from './ChangePriceB'
import React from 'react'


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
            <h2>Cart</h2>
            <Button className = 'deleteAllcart'
                    variant="outline-primary" 
                    onClick ={()=>removeAllCart()}
                    >
                    Empty cart
                       <FiTrash2 />
                </Button>

            { /*console.log('incart'),
                console.log(basket.cart),*/
                basket.map((item) => 
                (
                <div key = {item.id} 
                    >
                    <RecCartButton item = {item} 
                        removeItem = {removeItem}
                        changeItem = {changeItem}/>
                </div>            
                )) 
            }
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
