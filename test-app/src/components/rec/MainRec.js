import React, { useEffect,  useState} from 'react'
import Cart from './cart/Cart'
import Prods from './cart/Prods'


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'


import { fetchProds } from '../DBconn';



function MainRec() {

    const [items, setItems] = useState([])
    
    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            setItems({
                prods: serverProds.filter(el=>el.type == 'Service'),
                cart: []
            })
        }
        getProds()
    }, [])

    const addItemtoCart = (id) => {
        const aux = items.prods.filter(el=> el.id==id ? el: null)
        // console.log(aux)
        // console.log(items.cart)
        if(items.cart=== undefined || items.cart.length == 0){
            // console.log("in if")
            setItems({
                prods: items.prods,
                cart:  aux
            })
        } else {
            if(!items.cart.includes(aux[0])){
                setItems({
                    prods: items.prods,
                    cart:  items.cart.concat(aux)
                })
            }            
        }
    }

    const removeItemFromCart = async (id) => {
        setItems({
            prods: items.prods,
            cart: items.cart.filter(el => el.id!==id)
        })
    }


    const removeAllCart = () => {
        setItems({
            prods: items.prods,
            cart: []
        })
    }


    /**
     * Broken idk why
     * it set the price for botht eh cart item and the prod item
     * which should not happne and i cant figure out why
     */
    const changeCartItemPrice =  ({id, price}) => {
        
        // console.log(id)
        items.cart.forEach((el)=>{
            if(el.id == id){
                el.price = price             
            }
        })

        // const aux1 = items.cart.map( el =>{
        //     if(el.id== id){
        //         el.price = price
        //         return el
        //     } else {
        //         return el
        //     }
        // })
        // const aux2 = items.prods.filter(el=>el.id===id)
        // console.log(aux1)
        // console.log(aux2)
        // console.log(items.cart)
        // console.log(items.prods)
        
        // console.log(items.cart)
        setItems({...items, cart: items.cart})
    }

    return (
        <div>
            <h1>Main Reception</h1>
            {/* {console.log(items)} */}
            {items ? <div>
                
                <GridRow wrap='wrap'>
                <GridColumn width={8}>
                    <Prods items ={items.prods} 
                        addItem = {addItemtoCart}/>
                </GridColumn>
                <GridColumn width={4}>
                    <Cart items ={items.cart} 
                        removeAllCart = {removeAllCart}
                        removeItem = {removeItemFromCart}
                        changeItem = {changeCartItemPrice}/>
                </GridColumn>
                </GridRow> </div>: null}
        </div>
    )
}

export default MainRec
