import { useContext, useState, useEffect } from 'react'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { IoIosTennisball, IoIosBasketball, IoMdFootball} from 'react-icons/io'
import Chip from '@material-ui/core/Chip'
import { MyContext } from '../../../../App'
import { GridColumn, GridRow } from 'emotion-flex-grid'
import { makeStyles } from '@material-ui/core/styles'


function PickField({changeField, field}) {
    const cx = useContext(MyContext)
    const C = useStyles()

    const [selected, setSelected] = useState({})
    useEffect (()=>{
        setSelected(field)
    },[])
    const onChipClick = e =>{
        setSelected(e)
        changeField(e)
    }
    const unselected ='#feffeb'
    
    const lgq =(en, ro) => {
        return cx.lg=='en'?en:ro
    }

    return (
        <div>
        <GridRow wrap='wrap'>
            <GridColumn 
                onClick={()=>onChipClick('Hall')}
                >
                <Chip  
                    icon= {<IoIosBasketball />}
                    label={lgq('Great Hall','Sala Poli')}   
                    className={`${selected=='Hall'?C.hall:C.grey}`}
                    // onClick={(e)=>onChipClick(e)}               
                    />
            </GridColumn>

            <GridColumn 
                onClick={()=>onChipClick('T1')}
                >
                <Chip  
                    icon= {<IoIosTennisball />}
                    label={lgq('Tennis 1','Tenis 1')}  
                    className={`${selected=='T1'?C.t:C.grey}`}         
                    />
            </GridColumn>

            <GridColumn 
                onClick={()=>onChipClick('T2')}
                >
                <Chip
                    icon={<IoIosTennisball />}
                    label={lgq('Tennis 2','Tenis 2')}  
                    className={`${selected=='T2'?C.t:C.grey}`}          
                    />
            </GridColumn>

            <GridColumn 
                onClick={()=>onChipClick('T3')}
                >
                <Chip 
                    icon={<IoIosTennisball />}
                    label={lgq('Tennis 3','Tenis 3')}     
                    className={`${selected=='T3'?C.t:C.grey}`}           
                    />
            </GridColumn>   
        </GridRow>

        <GridRow wrap='wrap'>
            <GridColumn 
                onClick={()=>onChipClick('OutDoor')}
                >
                <Chip 
                    icon={<IoMdFootball />}
                    label='OutDoor'  
                    className={`${selected=='OutDoor'?C.outdoor:C.grey}`}               
                    />
            </GridColumn>

            <GridColumn 
                onClick={()=>onChipClick('A1')}
                >
                <Chip  
                    icon= {<GiWeightLiftingUp />}
                    label={lgq('A1','A1 Alb')}   
                    className={`${selected=='A1'?C.a1:C.grey}`}                  
                    />
            </GridColumn>

            <GridColumn 
                onClick={()=>onChipClick('A2')}
                >
                <Chip
                    icon={<GiWeightLiftingUp />}
                    label={lgq('A2','A2 Verde')}   
                    className={`${selected=='A2'?C.a2:C.grey}`}                           
                    />
            </GridColumn>

            <GridColumn 
                onClick={()=>onChipClick('A3')}
                >
                <Chip  
                    icon={<GiWeightLiftingUp />}
                    label={lgq('A3','A3 Roz')}         
                    className={`${selected=='A3'?C.a3:C.grey}`}                    
                    />
            </GridColumn>
        </GridRow>
       
        </div>
    )
}

const useStyles = makeStyles({
    a1:{
        background:'#f2f7f4'
    },
    
    a2:{
        background:'#5eff89'
    },
    
    a3:{
        background:'#fcafa9'
    },

    
    outdoor:{
        background:'#c5faaa'
    },
    
    hall:{
        background:'#fbffb5'
    },
    
    t:{
        background:'#ffd8b5'
    },

    grey:{
        background:'#d8d9ce'
    },
  })

export default PickField
