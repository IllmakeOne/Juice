


const API = 'http://localhost:3001/'

export  const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    // console.log(data)
    return data
}

export const fetchSuppliers = async () => {
    const res = await fetch('http://localhost:3001/suppliers')
    const data = await res.json()
    return data
}

export default function DBconn() {
    return (
        <div>
            
        </div>
    )
}
