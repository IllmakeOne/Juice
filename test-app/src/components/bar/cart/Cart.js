
import { Button } from '@material-ui/core';
import CartButton from './CartButton';
import { FiTrash2 } from "react-icons/fi"

function Cart({basket, removeItem ,removeAllCart}) {


    const getSum = () => {
        var sum = 0
        basket.forEach(element => {
            sum += element.price * element.stock            
        });
        return sum
    }

    const changePrice = (id, new_price) => {
        var selected = basket.map(
            function(el) {
                if(el.id == id){
                    return el
                }
            }
        )
        selected.price = new_price
    }


    
    return (
        <div className='cart'>
            <h2>Cart</h2>
            <Button className = 'deleteAllcart'
                    variant="outline-primary" 
                    onClick ={()=>removeAllCart()}
                    >
                    
                       <FiTrash2 />
                </Button>

            { /*console.log('incart'),
                console.log(basket.cart),*/
                basket.map((item) => 
                (
                <div key = {item.id} 
                    >
                    <h3>{item.name}</h3> 
                
                    <CartButton item = {item} 
                        removeItem = {removeItem}/>
                    {/* <ChangePriceB item = {item} changePrice = {changePrice}/> */}
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
