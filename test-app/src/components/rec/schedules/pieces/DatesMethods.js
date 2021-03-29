

export const formatDate = (date) =>{
    var res =''
    res += date.getDate() + '-'
    res += (date.getMonth() + 1 ) + '-'
    res += date.getFullYear() 
    return res
}

export const getCrtWeek = (date) => {
    var curr = date
    var first = curr.getDate() - curr.getDay() + 1
    // var last = first + 6 
    
    var firstday = new Date(curr.setDate(first))
    // var lastday = new Date(curr.setDate(last))
    // console.log(firstday)

    const pairs = weekDays.map((el, index) => {
        const aux = firstday.getDate() - firstday.getDay() + index + 1
        const auxdate = new Date(firstday.setDate(aux) )
        // console.log(auxdate)
        return [el, auxdate]

    })

    return pairs

}

export const getNextWeek = (inDate, multiplier) => {
    var auxMutiplier =7
    if(multiplier != undefined ){ // if multiplier specified, then mutiply
        auxMutiplier *= multiplier
    }//otherwise it will simply return next week
    const nextweek = new Date(inDate.getFullYear(), inDate.getMonth(), inDate.getDate()+auxMutiplier)
    return getCrtWeek(nextweek)
}

export const getPrevWeek = (inDate, multiplier) => { //same as getNextWeek but with - instead of +
    var auxMutiplier = 7
    if(multiplier != undefined ){ // if multiplier specified, then mutiply
        auxMutiplier *= multiplier
    }//otherwise it will simply return next week
    const nextweek = new Date(inDate.getFullYear(), inDate.getMonth(), inDate.getDate() - auxMutiplier)
    return getCrtWeek(nextweek)
}


const weekDays=[//this will be made into a function for the current day
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday']
    
const zileleSaptamanii=[
    'Luni', 
    'Marti',
    'Miercuri',
    'Vineri', 
    'Sambata',
    'Duminica']
