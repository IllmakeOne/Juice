// import { Button } from '@material-ui/core';
import ProdTypeSet from './ProdTypeSet'
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react'
import ProdButton from './ProdButton'
import React from 'react'

import Box from '@material-ui/core/Box';


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

const  ProdSet = ({items, onClick}) => {

    
    const[crtType, setCrtType] = useState('Juice')
    const[uniqueTypes, setUniqueTypes] = useState([])

    useEffect(() => {
        const types = items.map((elem)=>elem.type).filter((el) => el != 'Service')
    
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
            <GridRow warp='nowrap '>
            {/* {uniqueTypes} */}
            <div className='itemchangersdaddy'>
                <GridColumn>
                {uniqueTypes.map((t)=> {
                    return(
                    <Button
                        onClick= {()=>setCrtType(t)}>
                        <h2>{t}</h2>
                    </Button>
                    )
                    })  
                }
                </GridColumn>
            </div>

            <div className = 'display_prods'>
                 <ProdTypeSet items =  
                    {items.filter((el) => {if(el.type == crtType) return el}).filter((el)=> el.stock > 0)}
                    //  type = {crtType}
                    onClick = {onClick}
                     />
            </div>
            </GridRow>
        </div>
        </React.Fragment>
    )
}

export default ProdSet