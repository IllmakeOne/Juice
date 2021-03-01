// import { Button } from '@material-ui/core';
import ProdTypeSet from './ProdTypeSet'
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react'
import ProdButton from './ProdButton'
import React from 'react'

const  ProdSet = ({items, onClick}) => {

    
    const[crtType, setCrtType] = useState('Juice')
    const[uniqueTypes, setUniqueTypes] = useState([])

    useEffect(() => {
        const types = items.map((elem)=>{
            return elem.type
        })
    
        setUniqueTypes(types.filter(function(elem, pos) {
            return types.indexOf(elem) == pos
        }))

        // console.log(crtType)
        // console.log(uniqueTypes)

        
    },[])   

    // const bruh = pordsWithCrtType

    return (
        
        <React.Fragment>
        <div className='prodset'>
            {uniqueTypes}
                        
            <div className='itemchangersdaddy'>
                {uniqueTypes.map((t)=> {
                    return(
                    <Button
                        onClick= {()=>setCrtType(t)}>
                        <h2>{t}</h2>
                    </Button>
                    )
                    })  
                }
            </div>

            <div className = 'display_prods'>
                 <ProdTypeSet items =  
                    {items.filter((el) => {if(el.type == crtType) return el})}
                    //  type = {crtType}
                    onClick = {onClick}
                     />
            </div>

            
            {/* <ProdTypeSet  items ={pordsWithCrtType}
                type = {crtType}
                onClick = {onClick}/>
                */}
            {/* <ProdTypeSet itesm/> */}
            {/* {items.map((prod) => 
            (
            <div key = {prod.id} >
                <h3>{prod.name}</h3>
                <ProdButton prod = {prod}
                     onClick = {addtoCart} />
            </div>            
            ))} */}
        </div>
        </React.Fragment>
    )
}

export default ProdSet