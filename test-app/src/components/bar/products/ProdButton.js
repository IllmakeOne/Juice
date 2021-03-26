
import { GridRow, GridColumn } from 'emotion-flex-grid'
import { AiFillStar } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import { switchFavoriteItem } from '../../DBconn'

const ProdButton = ({prod, onClick, className, changeFav}) => {  

        const starColor = prod.fav? 'orange': 'lightblue'

        const addToFav = () => {
            //change item's fav to the oposite
            const newprod = {...prod, fav: !prod.fav}
            // console.log(newprod)
            switchFavoriteItem(newprod)
        }


 
        return (
            <div className = {className} >
            {/* <GridColumn width = {4}> */}
            <GridRow>
                <GridColumn> 
                    <div onClick ={()=>onClick(prod.id)} >
                        <GridRow>
                            <GridColumn><img width = {80} height={80} src={prod.image}></img></GridColumn>
                            <GridColumn>
                                <h3>{prod.name}   </h3> <br/>
                                
                                <h3>Price: {prod.price}</h3> <br/>
                                <h3>Stock: {prod.stock}</h3>
                            </GridColumn>
                        </GridRow>           
                    </div>
                </GridColumn>
                <GridColumn width = {1}style={{ background: starColor}} onClick={()=>addToFav(prod.id)}>
                    {/* <div className = 'favButton'>
                        <IconContext.Provider
                        value={{ color: starColor, size: '25px' }}
                        >
                            <div onClick = {()=>addToFav(prod.id)}>
                                <AiFillStar />
                            </div>
                        </IconContext.Provider>
                    </div> */}
                </GridColumn>
            </GridRow>
            </div>

            
        );
}

export default ProdButton