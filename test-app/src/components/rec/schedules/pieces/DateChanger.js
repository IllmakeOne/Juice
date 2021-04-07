import { useContext} from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import { Button, Input, TextField } from '@material-ui/core'

import { FiPlus, FiMinus } from 'react-icons/fi'


import { GridRow } from 'emotion-flex-grid';
import PickDate from './PickDate';
import { MyContext } from '../../../../App';

function DateChanger({weekMutiplier, changeDateMultiplier,today, settoday}) {

    const cx = useContext(MyContext)

    const upOneWeek = (mult) => {
        var newMutip
        if(mult == -1){
          newMutip = weekMutiplier - 1
        } else if (mult == 0){
          newMutip = 0
        } else {
          newMutip = weekMutiplier + 1
        }
        // console.log(newMutip)
        changeDateMultiplier(newMutip)    
    }

    return (
        <div>
            <GridRow>
            <Button
                variant="outlined"
                size= 'small'
                onClick= {()=>upOneWeek(-1)}
                startIcon={<FiMinus />}
                />

            <Button 
                variant="outlined"
                onClick= {()=>upOneWeek(0)}
                >                        
                {cx.lg=='en'? 'Today':'Azi'}
            </Button>

            
            <Button
                variant="outlined"
                size= 'small'
                onClick= {()=>upOneWeek(1)}
                startIcon={<FiPlus />}
                />
            </GridRow>

            <GridRow>
                <PickDate date={today} changeDate={settoday} />
            </GridRow>
        </div>
    )
}




export default DateChanger
