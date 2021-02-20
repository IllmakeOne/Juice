import React, { useEffect, useReducer, useState} from 'react'
import Header from '../Header'
import Cart from './cart/Cart'
import ProdSet from './products/ProdSet'

export const ACT = {
    GET: 'get',
    ADDCRT: 'addtocart',
    DELCARTITEM: 'deleteCartItem',
    INITIALIZEL: 'initialize'
}



function reducer(bar, action){
    switch (action.type){
        case ACT.DELCARTITEM:
            console.log('delte')
            // return action.payload.prods
        case ACT.INITIALIZEL:
            return action.payload
        case ACT.ADDCRT:
            console.log('addcart')
            // return addtoCart(bar, action.payload.id)
            return action.payload
        default:
            return bar
    }
}



const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    return data
}

   
function MainBar() {

    
    const [bar,dispatch] = useReducer(reducer, {prods: [], cart: []})

    // const [bar, setBar] = useState({
    //     prods: [],
    //     cart: []
    // })
    // //get from db and pas son
    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            dispatch({
                type: ACT.INITIALIZEL,
                payload: {prods: serverProds, cart: []}
            })
            // setBar({
            //     prods: serverProds,
            //     cart: []
            // })
        }
        getProds()
    }, [])


    // useEffect(() =>{
    //     console.log(bar)
    // }, [bar])



    /*const removeItemfromCart = (bar, id) => {
        const indexProd = bar.prods.findIndex(el  => el.id == id)
    
        const indexBask = bar.cart.findIndex(el  => el.id == id)
    
        bar.prods[indexProd].stock +=  bar.cart[indexBask].stock
        bar.cart.splice(indexBask,1)
    
        // dispatch({
        //     type: ACTIONS.ADDCRT,
        //     payload: bar
        // })
        return bar
    //     setBar({
    //         prods: bar.prods,
    //         cart: bar.cart
    //     })
    }*/
     
    /*const addtoCart = (bar, id) => { console.log('addcart')
        const bruh = bar.prods
        const auxBasket = bar.cart
        var crt = null
        const deku = bruh.map(
            function(prod) {
                if(prod.id == id){
                    prod.stock = prod.stock - 1
                    crt = Object.assign({},prod)
                    return prod
                } else {
                    return prod
                }
            })
        const indexof = auxBasket.findIndex(elem => elem.id == id)
        if(indexof== -1){
            //if it finds it , increase basket stock
            auxBasket.push(crt)
            auxBasket[auxBasket.findIndex(elem => elem.id == id)].stock = 1
        } else {
            //if it doesnt, add it wiht stock 1
            auxBasket[indexof].stock += 1
        }
    
        return bar
    
    //     setBar({
    //         prods: bar.prods,
    //         cart: bar.cart
    //     })
    }*/




    /*onSubmit = { } */
     /* onChange={e=>setname(e.target.value)<form>
                <input type="text" value = {ACTION.GET}/>
            </form>*/
    return (
        <div className = 'mainbar'>
            {/* <Header title= {JSON.stringify(bar,null)}/> */}
            {/* {JSON.stringify(bar,null)} */}
            {console.log(bar)}
            <Cart basket = {bar} dispatch = {dispatch} />
            <ProdSet items = {bar} dispatch = {dispatch}/>
        </div>
    )
}

export default MainBar
