import { BarScreen } from "./bar/MainBar"


const Header = ({title}) => {
    const onClick = () =>{
        console.log('clique')
    }

    return (
        <header className='header'>
            {/* <h1 style={headringStyle}>Header buh  {title}</h1> */}
            Page header:  {title}
        </header>
    )
}

Header.defaultProps = {
    title: 'Prods',
}

// const headringStyle = {
//     color: 'red',
//     backgroundColor: 'orange'
// } 

export default Header
