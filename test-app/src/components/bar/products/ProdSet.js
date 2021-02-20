import ProdButton from './ProdButton'
import ACT from '../MainBar'

const ProdSet = ({items, dispatch}) => {

    const addtoCart = (id) => { 
        items.prods.map(el => el.id==id ? el.stock-= 1 : el.stock)
        var crt = items.prods.map(el => el.id==id ? el: [])
        const indexof = items.cart.findIndex(elem => elem.id == id)
        if(indexof== -1){
            //if it finds it , increase basket stock
            items.cart.push({...crt, stock: 1})
            // items.cart[items.cart.findIndex(elem => elem.id == id)].stock = 1
        } else {
            //if it doesnt, add it wiht stock 1
            items.cart[indexof].stock += 1
        }

        
        console.log(id )
        dispatch({ 
            type: ACT.ADDCRT,
            payload: items
        })
        // return {prods
        //     // prods: prods.prods,
        //     // cart: prods.cart
        // }
    }

    return (
        
        <div className='prodset'>
            {items.prods.map((prod) => 
            (
            <div key = {prod.id} >
                <h3>{prod.name}</h3>
                <ProdButton prod = {prod}
                     onClick = {addtoCart} />
            </div>            
            ))}
        </div>
    )
}

export default ProdSet