import axios from 'axios'


export const switchFavoriteItem = (newprod) => {
    console.log(newprod.fav)
    axios({
        method: 'put',
        url: `http://localhost:3001/prods/${newprod.id}`,
        data: newprod
      });
}

export const switchKeyAssignment = (newKey) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/keys/${newKey.id}`,
        data: {...newKey, assigned: !newKey.assigned}
      }).then(response => {
          return response.data
      });
}


export const getAppsByDateandField = async ({date, field}) => {
    return axios.get(`http://localhost:3001/apps?date=${date}&field=${field}`)
         .then(function (response) {
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
            return response.data
      })
}

const API = 'http://localhost:3001/'

export  const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchKeys = async () => {
    const res = await fetch('http://localhost:3001/keys')
    const data = await res.json()
    // console.log(data)
    return data
}

export const fetchSuppliers = async () => {
    const res = await fetch('http://localhost:3001/suppliers')
    const data = await res.json()
    return data
}

export  const fetchTypes = async () => {
    const res = await fetch('http://localhost:3001/productTypes')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchApprow = async () => {
    const res = await fetch('http://localhost:3001/apps')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchAppoitments = async () => {
    const res = await fetch('http://localhost:3001/appointments')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchClients = async () => {
    const res = await fetch('http://localhost:3001/clients')
    const data = await res.json()
    // console.log(data)
    return data
}


//-----------------------------Setters--------------
export const addCartList = async (list)=>{
    //send to db new cartlist
    // console.log(list)
}

export  const fetchCartProdLists = async () => {
    const res = await fetch('http://localhost:3001/cartlists')
    const data = await res.json()
    // console.log(data)
    return data
}



export default function DBconn() {
    return (
        <div>
            
        </div>
    )
}
