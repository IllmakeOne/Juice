
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

function OrangePaper({children}) {
    const C = useStyles()
    return (
        <Paper elevation={2} className={C.paper}>
            {children}
        </Paper>
    )
}

const useStyles = makeStyles({

    paper: {
        boxShadow: '2px 2px 34px 7px rgb(255, 170, 86)',
        height: 400,
        width:  600,
        padding: 15,
        height: 500, 
        overflow: 'auto',
    },
  });

export default OrangePaper
