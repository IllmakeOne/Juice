
import { Button } from '@material-ui/core';
import CartButton from './CartButton';
import { FiTrash2 } from "react-icons/fi"
import ChangePriceB from './ChangePriceB'

function Cart({basket, removeItem ,removeAllCart, changePrice}) {


    const getSum = () => {
        var sum = 0
        basket.forEach(element => {
            sum += element.price * element.stock            
        });
        return sum
    }

    
    return (
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
                
                    <CartButton item = {item} 
                        removeItem = {removeItem}
                        changePrice = {changePrice}/>
                </div>            
                )) 
            }
            <div className='finalbasket'>
                Finish total: {getSum()} lei
            </div>
        </div>
    )
}

export default Cart
