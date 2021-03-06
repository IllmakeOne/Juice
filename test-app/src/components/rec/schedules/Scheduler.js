import { useState, useEffect } from 'react'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

const m = 36
const n = 7
const no = 4


const Scheduler = ({apps}) => {
    console.log(apps)
    
    
    const dab = [1,2,3,4,5,6,7,8,9,10,12]

    const populateGrid = () =>{
        var aux= []
        for (var i= 0; i< n*m; i++){
            aux.push('dab')
        }
        return aux
    }

    const griVals = [...Array(n*m).keys()]
    const auxtext =[<h1>sss</h1>,<h2>sss</h2>]
    // const [apps, setApps] = useState([])


    // array of N elements, where N is the number of rows needed
    const rows = [...Array( Math.ceil(griVals.length / no) )];
    // chunk the products into the array of rows
    const productRows = rows.map( (row, idx) => griVals.slice(idx * no, idx * no + no) )

    const genTabale = () =>{
        var x
     }
       return (

        <div>
            <GridRow wrap='wrap'>
                <GridColumn width={1.5}>
                <div>Time</div>
                </GridColumn>
                <GridColumn width={1.5}>
                <div>Monday</div>
                </GridColumn>
                <GridColumn width={1.5}>
                <div>Tuesday</div>
                </GridColumn>
                <GridColumn width={1.5}>
                <div>Wednesday</div>
                </GridColumn>
                <GridColumn width={1.5}> 
                <div>Thursday</div>
                </GridColumn>
                <GridColumn width={1.5}>
                <div>Friday</div>
                </GridColumn>
                <GridColumn width={1.5}>
                <div>Saturday</div>
                </GridColumn>
                <GridColumn width={1.5}>
                <div>Sunday</div>
                </GridColumn>
            </GridRow>
        </div>
        //    <div className = 'grid-container'>
        //      {productRows.map((row, idx) => (
        //         <div className="grid-item" key={idx}>   
        //             { row.map( product => <h3 key={product} className='grid-item'>dick</h3> )}
        //         </div> ))}
        //    </div>
       )
}

export default Scheduler
