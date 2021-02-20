// import PropTypes from 'prop-types
import { useState, useEffect } from 'react'
import ProdSet from './ProdSet'
import Cart from './Cart'

const ProdList =() => {
    //get from db and pas son
    const [bar, setBar] = useState({
        prods: [],
        cart: []
    })

    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            setBar({
                prods: serverProds,
                cart: []
            })
        }
        getProds()
    }, [])

    const fetchProds = async () => {
        const res = await fetch('http://localhost:3001/prods')
        const data = await res.json()
        return data
    }


    const removeItem = (id) => {
        const indexProd = bar.prods.findIndex(el  => el.id == id)

        const indexBask = bar.cart.findIndex(el  => el.id == id)

        bar.prods[indexProd].stock +=  bar.cart[indexBask].stock
        bar.cart.splice(indexBask,1)

        setBar({
            prods: bar.prods,
            cart: bar.cart
        })
    // window.location.reload(false);
        
    }



    const decrProd = (id) => {
        const bruh = bar.prods
        const auxBasket = bar.cart
        var crt = null
        const deku = bruh.map(
            function(prod, i) {
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

        setBar({
            prods: bar.prods,
            cart: bar.cart
        })
    }

    return (
        <div className = 'prodlist'>
            <Cart basket = {bar.cart} removeItem = {removeItem} />
            <ProdSet prods = {bar.prods} decrProd = {decrProd}/>
        </div>
    )
}



export default ProdList

