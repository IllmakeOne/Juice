import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

function KeyBox({stats, crtKey}) {
    const C = useStyles()

    

    return (
        <Paper elevation={2} className={C.boxx}>
            {/* {console.log(crtKey)} */}
            <h2>{crtKey.id}</h2>
        </Paper>
    )
}


const useStyles = makeStyles({
    boxx: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: 150,
      width: 150,
      boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    },

    orangeShadow: {
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    }

  }); 

export default KeyBox
