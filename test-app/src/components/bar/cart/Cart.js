
import CartButton from './CartButton';

function Cart({basket, dispatch}) {

    const getSum = () => {
        var sum = 0
        basket.cart.forEach(element => {
            sum += element.price * element.stock            
        });
        return sum
    }

    // const changePrice = (id, new_price) => {
    //     var selected = basket.map(
    //         function(el) {
    //             if(el.id == id){
    //                 return el
    //             }
    //         }
    //     )
    //     selected.price = new_price
    // }

    
            {/* <CartSet items = {basket} 
                    removeItem = {removeItem}
                    chan gePrice = {changePrice} /> */}
    return (
        <div className='cart'>
            <h2>Cart</h2>

            { console.log('incart'),
                console.log(basket.cart),
                basket.cart.map((item) => 
                (
                <div key = {item.id} 
                    className = 'cartbutton'
                    >
                    <h3>{item.name}</h3> 
                
                    <CartButton item = {item} 
                        dispatch = {dispatch}/>
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
