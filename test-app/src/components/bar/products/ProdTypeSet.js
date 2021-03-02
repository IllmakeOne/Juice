import React from 'react'
import ProdButton from './ProdButton'
import Button from 'react-bootstrap/esm/Button';

const ProdTypeSet = ({items, onClick}) => {
    return (
        <div className='prodtypeset'>
            <h2>Type: {items[0].type}</h2>
            {items.map((prod) => {
                        return (
                    <div key = {prod.id} >
                        {/* <h3>{prod.name}</h3> */}
                        <ProdButton prod = {prod}
                            onClick = {onClick} />
                    </div>
                        )})
             }
        </div>
    )
}

export default ProdTypeSet
