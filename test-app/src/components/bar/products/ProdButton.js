
import { GridRow, GridColumn } from 'emotion-flex-grid'
import { FiPlus } from 'react-icons/fi';

const ProdButton = ({prod, onClick}) => {  
 
        return (
            <div className = 'prodbutton' onClick ={()=>onClick(prod.id)}>
            {/* <GridColumn width = {4}> */}
            <GridRow>
                <GridColumn><img width = {80} height={80} src={prod.image}></img></GridColumn>
                <GridColumn>
                    <h3>{prod.name}   </h3> <br/>
                    
                    <h3>Price: {prod.price}</h3> <br/>
                    <h3>Stock: {prod.stock}</h3>
                </GridColumn>
            </GridRow>                
            </div>

            
        );
}

export default ProdButton