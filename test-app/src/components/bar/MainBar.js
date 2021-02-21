import React, { useEffect,  useState} from 'react'
import Header from '../Header'
import Cart from './cart/Cart'
import ProdSet from './products/ProdSet'


const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    return data
}
//new Branch here
   
function MainBar() {

    const[bar, setBar] = useState({
        prods: [],
        cart: []
    })

    // //get from db and pas son
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


    // useEffect(() =>{
    //     console.log(bar)
    // }, [bar])



    const removeItemfromCart = async (id) => {
        const indexProd = bar.prods.findIndex(el  => el.id == id)
    
        const indexBask = bar.cart.findIndex(el  => el.id == id)
    
        bar.prods[indexProd].stock +=  bar.cart[indexBask].stock
        bar.cart.splice(indexBask,1)

        console.log(bar)
       
        setBar({prods: bar.prods, cart: bar.cart})
    }
     
    const addtoCart = async  (id) => {
        // console.log(id)
        const bruh = bar.prods
        const auxBasket = bar.cart
        var aux = null
       bruh.map(
            function(prod) {
                if(prod.id == id){
                    prod.stock = prod.stock - 1
                    aux = {
                        id: prod.id,
                        name: prod.name,
                         stock: 1,
                         price: prod.price,
                         fixedPrice: prod.fixedPrice
                    }
                }
            })
        const indexof = auxBasket.findIndex(elem => elem.id == id)
        if(indexof== -1){
            //if it finds it , increase basket stock
            auxBasket.push(aux)
        } else {
            //if it doesnt, add it wiht stock 1
            auxBasket[indexof].stock += 1
        }
        // console.log(bar)
        setBar({prods: bruh, cart: auxBasket})
    }




    /*onSubmit = { } */
     /* onChange={e=>setname(e.target.value)<form>
                <input type="text" value = {ACTION.GET}/>
            </form>*/
    return (
        <div>
            {/* <Header title= {JSON.stringify(bar,null)}/> */}
            {/* {JSON.stringify(bar,null)} */}
            {/* {console.log(bar)} */}
            <Cart  basket = {bar} demoveItem = {removeItemfromCart} />
            <ProdSet items = {bar} addtoCart = {addtoCart}/>
        </div>   
    )
}

export default MainBar
